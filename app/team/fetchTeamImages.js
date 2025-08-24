// src/utils/fetchTeamImages.js
import { client } from "@/sanity";

// This function will fetch all team members from Sanity and create a map
// for easy lookup by name.
const fetchSanityImages = async () => {
  try {
    // Check if Sanity client is properly configured
    if (!client || !process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      return new Map();
    }

    // Updated query to match the actual schema
    const query = `*[_type == "team"] {
      name,
      'profilepic': photo.asset->url,
      committee,
      position,
      society,
      year,
      isWebsiteTeam
    }`;
    
    const sanityData = await client.fetch(query);
    const imageMap = new Map();
    
    if (sanityData && Array.isArray(sanityData)) {
      sanityData.forEach(member => {
        if (member.name && member.profilepic) {
          // We normalize the name to lowercase for case-insensitive matching
          const normalizedName = member.name.toLowerCase().trim();
          imageMap.set(normalizedName, member.profilepic);
        }
      });
    }
    
    return imageMap;
  } catch (error) {
    return new Map();
  }
};

// This function will take your hardcoded data and the Sanity image map
// and return a new array with updated profilepic URLs.
export const getUpdatedTeamData = async (hardcodedData) => {
  try {
    const imageMap = await fetchSanityImages();
    
    // If no images were fetched, return original data
    if (imageMap.size === 0) {
      return hardcodedData;
    }
    
    const updatedData = hardcodedData.map(person => {
      // Normalize the name from your hardcoded data for lookup
      const nameKey = person.name.toLowerCase().trim();
      const sanityImage = imageMap.get(nameKey);
      
      // Try partial matching as fallback if exact match fails
      if (!sanityImage) {
        const partialMatch = Array.from(imageMap.keys()).find(sanityName => 
          sanityName.includes(nameKey) || nameKey.includes(sanityName)
        );
        if (partialMatch) {
          const partialImage = imageMap.get(partialMatch);
          if (partialImage) {
            return {
              ...person,
              profilepic: partialImage
            };
          }
        }
      }
      
      // Create a new object. If a Sanity image is found, use it.
      // Otherwise, keep the original profilepic from the hardcoded data.
      return {
        ...person,
        profilepic: sanityImage || person.profilepic
      };
    });
    
    return updatedData;
  } catch (error) {
    // Return original data if there's any error
    return hardcodedData;
  }
};
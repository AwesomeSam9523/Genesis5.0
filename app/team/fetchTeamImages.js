// src/utils/fetchTeamImages.js
import { getSanityClient } from "@/sanity";

// Helper function to check if an image URL is valid and accessible
const isValidImageUrl = async (url) => {
  if (!url || typeof url !== 'string') {
    return false;
  }
  
  try {
    // Basic URL validation
    const urlObj = new URL(url);
    if (!urlObj.protocol.startsWith('http')) {
      return false;
    }
    
    // Check if the URL is from Sanity CDN
    if (!url.includes('cdn.sanity.io')) {
      return false;
    }
    
    return true;
  } catch (error) {
    return false;
  }
};

// This function will fetch all team members from Sanity and create a map
// for easy lookup by name.
const fetchSanityImages = async () => {
  try {
    // Get the Sanity client safely
    const client = getSanityClient();
    
    // Check if Sanity client is properly configured
    if (!client || !process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      console.warn('Sanity client not available, skipping image fetch');
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
      // Process each member and validate their image URL
      for (const member of sanityData) {
        if (member.name && member.profilepic) {
          // Validate the image URL before adding it to the map
          const isValidImage = await isValidImageUrl(member.profilepic);
          if (isValidImage) {
            // We normalize the name to lowercase for case-insensitive matching
            const normalizedName = member.name.toLowerCase().trim();
            imageMap.set(normalizedName, member.profilepic);
          }
        }
      }
    }
    
    return imageMap;
  } catch (error) {
    console.warn('Error fetching Sanity images:', error.message);
    return new Map();
  }
};

// This function will take your hardcoded data and the Sanity image map
// and return a new array with updated profilepic URLs.
export const getUpdatedTeamData = async (hardcodedData) => {
  try {
    const imageMap = await fetchSanityImages();
    
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
      
      // If we have a Sanity image, use it. Otherwise, keep the original profilepic.
      // The component will handle loading states and fallbacks.
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
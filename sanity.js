import { createClient } from "@sanity/client";

// Only create the client if we're in a browser environment and have the required config
// This prevents build-time errors when environment variables are not available
let client = null;

const createSanityClient = () => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    return null;
  }

  // Check if we have the required environment variables
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
  
  if (!projectId || !dataset || !apiVersion) {
    console.warn('Sanity client not initialized: Missing required environment variables');
    return null;
  }

  try {
    return createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token: process.env.NEXT_PUBLIC_SANITY_TOKEN || "",
      withCredentials: false,
    });
  } catch (error) {
    console.error('Failed to create Sanity client:', error);
    return null;
  }
};

// Export a function to get the client safely
export const getSanityClient = () => {
  if (!client) {
    client = createSanityClient();
  }
  return client;
};

// Export the client for backward compatibility (but it will be null during build)
export { client };

import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false,
  // For public read access, you can use an empty token or your read token
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN || "",
  // Enable CORS for browser requests
  withCredentials: false,
});

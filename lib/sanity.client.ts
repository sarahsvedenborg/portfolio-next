import { createClient } from "next-sanity";

/* export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || ""; */

export const projectId = "t8fkozxm";
export const dataset = "production";
export const apiVersion = "2021-10-21";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

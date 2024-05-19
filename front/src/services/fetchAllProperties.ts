import { z } from "zod";

const PropertySchema = z.object({
  title: z.string(),
  link: z.string().url(),
  address: z.string(),
  city: z.string(),
  image: z.string().url(),
  id: z.string(),
});

export type Property = z.infer<typeof PropertySchema>;

interface FetchAllPropertiesOptions {
  key: string;
  order: string;
}

export const fetchAllProperties = async (
  options?: FetchAllPropertiesOptions
): Promise<Property[]> => {
  const url = options
    ? "http://localhost:3000/api/properties?" +
      new URLSearchParams({ ...options }).toString()
    : "http://localhost:3000/api/properties?";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

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

export const fetchAllProperties = async (): Promise<Property[]> => {
  const response = await fetch("http://localhost:3000/api/properties");
  const data = await response.json();
  return data;
};

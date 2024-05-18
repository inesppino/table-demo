import axios from "axios";
import { Property } from "../models/property";

const REMOTE_JSON_FEED_URL =
  "https://feeds.datafeedwatch.com/35132/f3b6e4d541f33f9dc433d024ecf6b1abf12d9488.json";

export const fetchProperties = async (): Promise<Property[]> => {
  const response = await axios.get(REMOTE_JSON_FEED_URL);
  const data = response.data;

  return data.products.map((property: any) => ({
    title: property.title,
    link: property.url,
    address: property.street,
    city: property.city,
    image: property.pictures1,
    id: property.id,
  }));
};

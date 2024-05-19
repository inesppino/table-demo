import axios from "axios";
import { Property } from "../domain/property";
import { PropertyRepository } from "../domain/property-repository";

// const REMOTE_JSON_FEED_URL =
//   "https://feeds.datafeedwatch.com/35132/f3b6e4d541f33f9dc433d024ecf6b1abf12d9488.json";

export class JsonFeedRepository implements PropertyRepository {
  constructor(private readonly url: string) {}

  async getAllProperties(): Promise<Property[]> {
    const response = await axios.get(this.url);
    const data = response.data;

    return data.products.map(
      (property: any) =>
        new Property(
          property.title,
          property.url,
          property.street,
          property.city,
          property.pictures1,
          property.id
        )
    );
  }
}

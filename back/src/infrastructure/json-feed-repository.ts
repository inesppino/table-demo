import axios from "axios";
import { Property } from "../domain/property";
import {
  PropertyRepository,
  PropertyServiceOptions,
} from "../domain/property-repository";

export class JsonFeedRepository implements PropertyRepository {
  constructor(private readonly url: string) {}

  async getAllProperties(
    options?: PropertyServiceOptions
  ): Promise<Property[]> {
    const response = await axios.get(this.url);
    const data = response.data;

    const properties = data.products.map(
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

    if (options) {
      const sortFn =
        options.order === "asc"
          ? (a: Property, b: Property) =>
              a[options.key].localeCompare(b[options.key])
          : (a: Property, b: Property) =>
              b[options.key].localeCompare(a[options.key]);

      properties.sort(sortFn);
    }

    return properties;
  }
}

import { Property } from "../domain/property";
import {
  PropertyRepository,
  PropertyServiceOptions,
} from "../domain/property-repository";

export class PropertyService {
  constructor(private readonly propertyRepository: PropertyRepository) {}

  async getProperties(options?: PropertyServiceOptions): Promise<Property[]> {
    const properties = await this.propertyRepository.getAllProperties(options);
    if (properties.length === 0) {
      throw new Error("No properties found");
    }
    return properties;
  }
}

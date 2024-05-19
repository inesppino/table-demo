import { Property } from "../domain/property";
import { PropertyRepository } from "../domain/property-repository";

export class PropertyService {
  constructor(private readonly propertyRepository: PropertyRepository) {}

  async getProperties(): Promise<Property[]> {
    const properties = await this.propertyRepository.getAllProperties();
    if (properties.length === 0) {
      throw new Error("No properties found");
    }
    return properties;
  }
}

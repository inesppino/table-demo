import { Property } from "./property";

export interface PropertyServiceOptions {
  key: keyof Property;
  order: string;
}
export interface PropertyRepository {
  getAllProperties(options?: PropertyServiceOptions): Promise<Property[]>;
}

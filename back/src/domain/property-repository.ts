import { Property } from "./property";

export interface PropertyRepository {
  getAllProperties(): Promise<Property[]>;
}

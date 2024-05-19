import { Request, Response } from "express";
import { PropertyService } from "../application/property-service";

export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {
    this.getProperties = this.getProperties.bind(this);
  }

  async getProperties(req: Request, res: Response): Promise<void> {
    const properties = await this.propertyService.getProperties();
    res.json(properties);
  }
}

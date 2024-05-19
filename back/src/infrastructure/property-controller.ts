import { z } from "zod";
import { Request, Response } from "express";
import { PropertyService } from "../application/property-service";

const querySchema = z.object({
  key: z.enum(["city", "address", "title"]),
  order: z.enum(["asc", "desc"]),
});
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {
    this.getProperties = this.getProperties.bind(this);
  }

  async getProperties(req: Request, res: Response): Promise<void> {
    if (req.query.key) {
      const validatedQuery = querySchema.parse(req.query);
      const properties = await this.propertyService.getProperties(
        validatedQuery
      );
      res.json(properties);
    } else {
      const properties = await this.propertyService.getProperties();
      res.json(properties);
    }
  }
}

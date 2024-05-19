import { PropertyService } from "../application/property-service";
import { getEnv } from "../lib/get-env";
import { JsonFeedRepository } from "./json-feed-repository";
import { PropertyController } from "./property-controller";

const propertyRepository = new JsonFeedRepository(getEnv("JSON_FEED"));

const propertyService = new PropertyService(propertyRepository);

export const propertyController = new PropertyController(propertyService);

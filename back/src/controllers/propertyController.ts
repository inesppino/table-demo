import { Request, Response } from "express";
import { fetchProperties } from "../services/propertyService";

export const getProperties = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const properties = await fetchProperties();
    res.json(properties);
    console.log("Properties fetched");
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.error("Error fetching properties", error);
  }
};

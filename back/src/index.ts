import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { propertyController } from "./infrastructure/dependencies";
import asyncHandler from "./lib/async-handler";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/api/properties", asyncHandler(propertyController.getProperties));

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

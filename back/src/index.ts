import express from "express";
import { getProperties } from "./controllers/propertyController";

const app = express();
const PORT = 3000;

app.get("/api/properties", getProperties);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

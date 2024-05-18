import express from "express";
import { getProperties } from "./controllers/propertyController";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/properties", getProperties);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

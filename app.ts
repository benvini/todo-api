import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import todoRoutes from "./src/routes/todo.routes";

const app: Application = express();
dotenv.config();
const PORT = process.env.PORT || 3001;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/todo-app";

app.use(bodyParser.json());
app.use(cors());
app.use("/", todoRoutes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(error.stack);
  res.status(500).json({ message: "Internal server error" });
});

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error.stack);
  });

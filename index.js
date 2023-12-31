import { config } from "dotenv";
config();

import express from "express";
const server = express();
import cors from "cors";
import TaskRoutes from "./src/routes/TaskRoutes.js";

server.use(cors());
server.use(express.json());
server.use("/task", TaskRoutes);

server.listen(3333, () => {
  console.log("🚀 Api online");
});

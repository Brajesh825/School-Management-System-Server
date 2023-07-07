import express from "express";
import cors from "cors";

import { Connect } from "./db/connect.js";

const app = express();

// import routes
import { classRoutes } from "./routes/classRoute.js";
import { studentRoutes } from "./routes/studentRoute.js";
import { feeStructureRoutes } from "./routes/feeStructureRoute.js";
import { orderRoute } from "./routes/orderRoute.js";

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/api/v1", classRoutes);
app.use("/api/v1", studentRoutes);
app.use("/api/v1", feeStructureRoutes);
app.use("/api/v1", orderRoute);

async function start() {
  let connectionEstablished = await Connect();

  if (connectionEstablished) {
    app.listen("4000", () => {
      console.log("server started on 4000");
    });
  }
}

start();

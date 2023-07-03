import express from "express";
import cors from 'cors'

import { Connect } from "./db/connect.js";

const app = express();

// import routes

import { classRoutes } from "./routes/classRoute.js";

app.use(cors());
app.use(express.json());

app.use("/api/v1", classRoutes);

async function start() {
  let connectionEstablished = await Connect();

  if (connectionEstablished) {
    app.listen("4000", () => {
      console.log("server started on 4000");
    });
  }
}

start();

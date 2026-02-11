import express from "express";
import router from "./router";
import { connex } from "./config/db";
import "dotenv/config";

const app = express();

connex();

// Leer datos de formularios
app.use(express.json());

app.use("/", router);

export default app;

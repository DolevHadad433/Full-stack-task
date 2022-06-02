import express from "express";
import bodyParser from "body-parser";
import { ColorsRouter } from "./colors/colors.routs.mjs";

const port = 3001;

const app = express();

app.listen(port);

app.use(bodyParser.json());

app.use("/api/colors", ColorsRouter);


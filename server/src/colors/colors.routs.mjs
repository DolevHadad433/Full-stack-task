import { Router } from "express";

import {
  getAllColors,
  createNewColors,
  editColors,
  resetColorsVoting,
} from "./colors.data.mjs";

export const ColorsRouter = Router();

//Get all colors
ColorsRouter.get("/", async (req, res) => {
  res.send(await getAllColors());
});

//Create a new user
ColorsRouter.post("/post", async (req, res) => {
  res.send(await createNewColors(req.body));
});

//Update user by ID
ColorsRouter.put("/:id", async (req, res) => {
  res.send(await editColors(req.params.id, req.body));
});

//Reset the colors voting
ColorsRouter.get("/reset", async (req, res) => {
  res.send(await resetColorsVoting());
});

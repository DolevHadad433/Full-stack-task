import { getDB } from "../mongodb.mjs";
import { ObjectId } from "mongodb";
import fs from "fs";

// GET - Colors collection
async function getColorsCollection() {
  const db = await getDB();
  return db.collection("colors");
}

//Get all colors
export async function getAllColors() {
  const colors = await getColorsCollection();
  return colors.find({}).toArray();
}

//Create a new color
export async function createNewColors(newColor) {
  const colors = await getColorsCollection();
  return colors.insertOne(newColor);
}

//Update color by ID
export async function editColors(id, newColor) {
  const colors = await getColorsCollection();
  colors.updateOne({ _id: ObjectId(id) }, { $set: newColor });
  return colors.find({}).toArray();
}

//Reset the colors voting
export async function resetColorsVoting() {
  const colors = await getColorsCollection();
  colors.updateMany({}, { $set: { votes: 0 } });
  return colors.find({}).toArray();
}

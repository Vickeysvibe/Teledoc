const { Schema, model, models } = require("mongoose");

const TrackerSchema = new Schema({
  hp: { type: String, required: true },
  sp: { type: String, required: true },
  sug: { type: String, required: true },
  feel: { type: String, required: true },
  mail: { type: String, required: true },
});

export const Tracker = models.Tracker || model("Tracker", TrackerSchema);

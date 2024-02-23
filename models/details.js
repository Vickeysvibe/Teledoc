const { Schema, model, models } = require("mongoose");

const DetailSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  mc: { type: String, required: true },
  mail: { type: String, required: true },
  notes: { type: String, required: true },
});

export const Details = models.Details || model("Details", DetailSchema);

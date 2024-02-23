const { Schema, model, models } = require("mongoose");

const TabletSchema = new Schema({
  name: { type: String, required: true },
  count: { type: Number, required: true },
  time: { type: String, required: true },
  mail: { type: String, required: true },
});

export const Tablet = models.Tablet || model("Tablet", TabletSchema);

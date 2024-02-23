const { Schema, model, models } = require("mongoose");

const NotiSchema = new Schema({
  noti: { type: String, required: true },
});

export const Noti = models.Noti || model("Noti", TabletSchema);

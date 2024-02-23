import { mongooseConnect } from "@/lib/mongoose";
import { Tablet } from "@/models/tablet";
import { Tracker } from "@/models/tracker";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "POST") {
    const { hp, sp, sug, mail, feel } = req.body;
    console.log(req.body);
    const TrackerDoc = await Tracker.create({
      hp,
      sp,
      sug,
      mail,
      feel,
    });
    res.json(TrackerDoc);
  }
  if (method === "GET") {
    res.json(await Tracker.find());
  }
}

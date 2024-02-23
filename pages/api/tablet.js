import { mongooseConnect } from "@/lib/mongoose";
import { Tablet } from "@/models/tablet";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "POST") {
    const { name, count, time, mail } = req.body;
    console.log(req.body);
    const TabletDoc = await Tablet.create({
      name,
      count,
      time,
      mail,
    });
    res.json(TabletDoc);
  }
  if (method === "GET") {
    res.json(await Tablet.find());
  }
}

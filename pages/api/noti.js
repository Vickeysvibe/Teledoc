import { mongooseConnect } from "@/lib/mongoose";
import { Noti } from "@/models/noti";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "POST") {
    const { noti } = req.body;
    console.log(req.body);
    const NotiDoc = await Noti.create({
      noti,
    });
    res.json(NotiDoc);
  }
}

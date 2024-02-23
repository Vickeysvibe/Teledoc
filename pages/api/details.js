import { mongooseConnect } from "@/lib/mongoose";
import { Details } from "@/models/details";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "POST") {
    const { name, age, mc, mail, notes } = req.body;
    console.log(req.body);
    const DetailDoc = await Details.create({
      name,
      age,
      mc,
      mail,
      notes,
    });
    res.json(DetailDoc);
  }
  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Details.findOne({ mail: req.query.mail }));
    } else {
      res.json(await Details.find());
    }
  }
  if (method === "PUT") {
    const { notes, id } = req.body;
    await Details.updateOne({ _id: id }, { notes });
    res.json(true);
  }
}

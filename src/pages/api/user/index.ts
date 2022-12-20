import { NextApiHandler } from "next";
import { userRepo } from "../../../di/DI";

const handler: NextApiHandler = async (req, res) => {
  await userRepo.putItem();

  return res.redirect("/");
};

export default handler;

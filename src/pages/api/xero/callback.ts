import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { xeroService } from "../../../di/DI";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const tokens = await xeroService.getAccessToken(req.url!);
  console.log(tokens);
  return res.redirect("/");
};

export default handler;

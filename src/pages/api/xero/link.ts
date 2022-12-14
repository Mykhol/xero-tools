import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { xeroService } from "../../../di/DI";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const url = await xeroService.getXeroLinkUrl();

  return res.redirect(url);
};

export default handler;

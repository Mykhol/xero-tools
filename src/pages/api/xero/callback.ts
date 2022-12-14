import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req);
  return res.redirect("/test");
};

export default handler;

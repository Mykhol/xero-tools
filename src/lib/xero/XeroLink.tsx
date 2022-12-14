import { FC } from "react";
import { createXeroLink } from "./LinkHandler";

const XeroLink: FC<{}> = () => {
  return (
    <div>
      <button onClick={() => createXeroLink()}>Link to Xero</button>
    </div>
  );
};

export default XeroLink;

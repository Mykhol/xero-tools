"use client";

import { signIn } from "next-auth/react";
import XeroLink from "../lib/xero/XeroLink";

export default function Home() {
  return (
    <div>
      <p onClick={() => signIn("google")}>Hello World!</p>
      <XeroLink />
    </div>
  );
}

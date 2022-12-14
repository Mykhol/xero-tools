"use client";

import { signIn } from "next-auth/react";

export default function Home() {
  return <p onClick={() => signIn("google")}>Hello World!</p>;
}

"use client";

import React, { FC } from "react";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

type AuthProviderProps = {
  children: React.ReactNode;
  session: Session;
};
const AuthProvider: FC<AuthProviderProps> = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
export default AuthProvider;

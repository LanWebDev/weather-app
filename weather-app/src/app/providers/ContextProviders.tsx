"use client";

import * as React from "react";
import { ReactNode } from "react";
import { GlobalContextProvider } from "../context/globalContext";

interface ContextProviderProps {
  children: ReactNode;
}

export function ContextProvider({ children }: ContextProviderProps) {
  return <GlobalContextProvider>{children}</GlobalContextProvider>;
}

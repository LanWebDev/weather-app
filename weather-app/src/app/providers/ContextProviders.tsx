"use client";

import { ReactNode } from "react";
import { GlobalContextProvider } from "../context/globalContext";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ContextProvider({ children }: ThemeProviderProps) {
  return <GlobalContextProvider>{children}</GlobalContextProvider>;
}

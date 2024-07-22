"use client";
import {
  ClerkProvider,
} from '@clerk/nextjs';
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ClerkProvider><NextUIProvider>{children}</NextUIProvider></ClerkProvider>;
}

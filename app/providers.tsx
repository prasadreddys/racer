"use client";

import { OnchainKitProvider } from "@coinbase/onchainkit";
import { base } from "wagmi/chains";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <OnchainKitProvider chain={base}>
      {children}
    </OnchainKitProvider>
  );
}

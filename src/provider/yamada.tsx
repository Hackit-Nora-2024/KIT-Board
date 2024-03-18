"use client"
import {ColorModeScript, UIProvider, defaultConfig} from "@yamada-ui/react"

export default function YamadaProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <UIProvider>
          <ColorModeScript initialColorMode={defaultConfig.initialColorMode} />
          {children}
      </UIProvider>
  );
}

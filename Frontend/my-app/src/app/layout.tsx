"use client"; // Ensures it runs as a Client Component

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/Theme/ThemeProvider";
import ThemeWrapper from "./components/Theme/ThemeWrapper";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["cyrillic"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            enableColorScheme
            themes={["dark", "light"]}
          >
            <ThemeWrapper>{children}</ThemeWrapper>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

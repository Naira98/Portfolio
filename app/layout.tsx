import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import ActiveSectionProvider from "@/context/ActiveSectionContext";
import OpenProjectContextProvider from "@/context/OpenProjectContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naira's Portfolio",
  description: "Crafting seamless web solutions with precision and passion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ActiveSectionProvider>
            <OpenProjectContextProvider>{children}</OpenProjectContextProvider>
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

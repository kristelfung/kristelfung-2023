import type { Metadata } from "next";
import "./globals.css";
import Container from "./components/container";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "kristelfung.com",
  description: "Generated by create next app",
};

import { EB_Garamond } from "next/font/google";
import FadeIn from "./components/fade_in";

const garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={garamond.className}>
      <body>
        <FadeIn>
          <Container>
            <Navbar />
            {children}
          </Container>
        </FadeIn>
      </body>
    </html>
  );
}
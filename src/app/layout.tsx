import Header from "@/components/layouts/Header";
import "./globals.css";
import type { Metadata } from "next";
import ProvidersWrapper from "@/components/ProvidersWrapper";

export const metadata: Metadata = {
  title: "Rearl World",
  description: "real world project",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <ProvidersWrapper>{children}</ProvidersWrapper>
      </body>
    </html>
  );
}

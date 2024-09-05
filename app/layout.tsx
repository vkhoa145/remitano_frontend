import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";


export const metadata: Metadata = {
  title: "Funny Videos",
  description: "Funny Videos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}

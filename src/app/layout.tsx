import { Metadata } from "next";
import { notoSans, roboto } from "@/fonts/font";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "JAMTI",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.className} ${roboto.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

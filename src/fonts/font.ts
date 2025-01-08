import { Noto_Sans, Roboto } from "next/font/google";

export const notoSans = Noto_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
});

export const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

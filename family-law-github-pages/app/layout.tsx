import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "家的下一站｜家事法律",
  description: "以理解與專業，陪伴您走過關係與家庭的重要轉折。",
  openGraph: { title: "家的下一站｜家事法律", description: "將難以說出口的事，交給法律好好安放。" },
  twitter: { card: "summary", title: "家的下一站｜家事法律", description: "將難以說出口的事，交給法律好好安放。" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}

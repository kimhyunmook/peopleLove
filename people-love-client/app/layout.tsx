import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./design.css";

const pretendard = localFont({
  src: "./fonts/Pretendard-Regular.woff2",
  variable: "--font-pretendara",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "호감도 분석기",
  description: "사람들과의 호감을 알아보자",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable}`}>
          {children}
      </body>
    </html>
  );
}

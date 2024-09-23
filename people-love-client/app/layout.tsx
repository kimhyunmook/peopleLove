import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Logo from "./componenet/logo";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
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
        <main className="flex_center">
          <Logo/>

          {children}
        </main>
      </body>
    </html>
  );
}

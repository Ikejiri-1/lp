import type { Metadata } from "next";
import { Neuton } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { WppButton } from "./components/WppButton";
import { GoogleTagManager } from "@next/third-parties/google";

const neutonSans = Neuton({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "800"],
});
const googleVerify = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
export const metadata: Metadata = {
  title: "Alves & Ikejiri Advogados",
  description:
    "Assessoria jurídica especializada em desbloqueio de valores em conta bancária.",
  icons: {
    icon: "/icon.png",
  },
  verification: {
    google: googleVerify,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${neutonSans.className} h-full antialiased`}>
      <head>
        <GoogleTagManager gtmId="GTM-TGDGMCQJ" />
        <link rel="icon" type="image/png" href="/icon.png" sizes="32x32"></link>
        <link rel="apple-touch-icon" href="/icon.png"></link>
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TGDGMCQJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Header />
        {children}
        <WppButton />
      </body>
    </html>
  );
}

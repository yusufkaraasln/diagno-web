import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "diagno - AI Supported Medical Diagnosis",
  description: "AI Supported Medical Diagnosis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>{children}</body>
      <Script
        async
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-11462167254"
      ></Script>
      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: ` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'AW-11462167254');`,
        }}
      ></Script>
    </html>
  );
}

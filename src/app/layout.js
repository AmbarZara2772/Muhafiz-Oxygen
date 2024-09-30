import React from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BRAND_NAME } from "@/utils/constants";
import { getCanonicalUrl } from "@/utils/misc";

const inter = Inter({ subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${BRAND_NAME} Cylinders, Refills, and Rentals in Lahore, PK`,
    template: `%s - ${BRAND_NAME}`
  },
  description:
    "Get oxygen cylinder refills, rentals, and sales in Lahore, Pakistan at " + BRAND_NAME + " for you home or industrial needs.",
  icons: {
    icon: [
      {
        url: "/logo/favicon.svg",
        href: "/logo/favicon.svg"
      },
      {
        url: "/logo/favicon.png",
        href: "/logo/favicon.png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image"
  },
  alternates: {
    canonical: getCanonicalUrl(siteUrl)
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
      {process.env.NODE_ENV === "production" && (
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
              `
          }}
        />
      )}
    </Head>

    <body className={inter.className}>
    {children}
    {process.env.NODE_ENV === "production" && (
      <GoogleAnalytics gaId="G-W80LT3G7JW" />
    )}
    <Analytics />
    <SpeedInsights />
    <WhatsAppButton />
    </body>
    </html>
  );
}

import "./globals.css";
import Script from "next/script";
import "./clash_grotesk.css";

export const metadata = {
  title: "Genesis 5.0",
  description:
    "Genesis is the largest technical fest of IEEE MUJ.",
  keywords: "hackathon, IEEEMUJ, genesis, genesis4.0, coding, programming, tech",
  url: "https://genesis.ieeemuj.com",
  openGraph: {
    title: "Genesis 5.0",
    description:
      "Genesis is the largest technical fest of IEEE MUJ.",
    url: "https://genesis.ieeemuj.com",
    images:
      "https://images.prismic.io/ieeemuj/Zral1EaF0TcGI1jj_thumb.jpg?auto=format,compress",
    siteName: "Genesis 5.0",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <title>Genesis 5.0 by IEEE MUJ</title>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-50RJG4PPLT"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-50RJG4PPLT');
          `}
        </Script>
      </head>
      <body>
        {/* <CustomCursor/> */}
        {children}
        </body>
    </html>
  );
}

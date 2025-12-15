import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Parsley",
  description: "Parsley",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/ottobookslogoblack.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/ottobookslogowhite.png",
      },
    ],
  },
  openGraph: {
    type: "website",
    url: "https://www.ottobooks.com/",
    title: "Parsley",
    description: "Parsley",
    siteName: "Parsley",
    images: [
      {
        url: "https://www.ottobooks.com/assets/otto-logo-primary.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: "https://www.ottobooks.com/assets/otto-logo-primary.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GSSD5CTGJZ"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GSSD5CTGJZ');`}
        </Script>

        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        {/* <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        /> */}
        {/* <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        /> */}
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#ffffff"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        {/* HTML Meta Tags */}
        <title>Parsley</title>
        <meta name="description" content="Parsley" />

        {/* Google / Search Engine Tags */}
        <meta itemProp="name" content="Parsley" />
        <meta itemProp="description" content="Parsley" />
        <meta
          itemProp="image"
          content="https://www.ottobooks.com/assets/otto-logo-primary.png"
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://www.ottobooks.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Parsley" />
        <meta property="og:description" content="Parsley" />
        <meta
          property="og:image"
          content="https://www.ottobooks.com/assets/otto-logo-primary.png"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="ottobooks.com" />
        <meta property="twitter:url" content="https://www.ottobooks.com/" />
        <meta name="twitter:title" content="Parsley" />
        <meta name="twitter:description" content="Parsley" />
        <meta
          name="twitter:image"
          content="https://www.ottobooks.com/assets/otto-logo-primary.png"
        />
      </head>

      <body>
        <main className="bg-[#fff]">{children}</main>
      </body>
    </html>
  );
}

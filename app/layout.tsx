import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] })

const PixelTracker = dynamic(() => import("../components/pixel"));

export const metadata: Metadata = {
  title: "NexusFinX | Offshore Banking Solutions",
  description:
    "Unlock offshore banking with NexusFinX. We provide seamless offshore company formation and banking solutions for entrepreneurs and individuals.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Meta Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push
            (arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!
            0;n.version='2.0';n.queue=[];t=b.createElement(e);
            t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,
            'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '9815464585199304');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=9815464585199304&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className={inter.className}>
        <PixelTracker/>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
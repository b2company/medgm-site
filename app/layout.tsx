import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Termina local font (será adicionada depois) - por enquanto usar Inter Bold para display
const termina = Inter({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-termina",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://medgm.com.br'),
  title: {
    default: "MedGM | Consultoria de Marketing Médico e Gestão Comercial para Clínicas",
    template: "%s | MedGM"
  },
  description: "A MedGM une marketing digital e estruturação comercial para clínicas médicas. Agende seu diagnóstico gratuito e transforme sua presença digital em pacientes reais.",
  keywords: ["marketing médico", "marketing para médicos", "consultoria médica", "gestão de clínicas", "tráfego pago médico", "SEO para médicos"],
  authors: [{ name: "MedGM" }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://medgm.com.br',
    siteName: 'MedGM',
    title: 'MedGM | Consultoria de Marketing Médico',
    description: 'Consultoria premium de marketing médico e estruturação comercial para clínicas',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'MedGM - Consultoria de Marketing Médico',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MedGM | Consultoria de Marketing Médico',
    description: 'Consultoria premium de marketing médico e estruturação comercial',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${termina.variable} overflow-x-hidden`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased font-body overflow-x-hidden">
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              if (!window._fbPixelInitialized) {
                fbq('init', '1376176936827293');
                fbq('track', 'PageView');
                window._fbPixelInitialized = true;
              }
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1376176936827293&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}

        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

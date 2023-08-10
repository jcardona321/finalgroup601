import Nav from '@/components/NavComponent/Nav';
import Footer from '@/components/FooterComponent/Footer';
import Script from 'next/script';
import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Elite Fitness Gym',
  description: 'Experience elite training and world-class gym facilities.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        <link rel="stylesheet" href="path/to/your/stylesheet.css" />
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
              async
            />
            <Script strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        {/* Your custom Google Analytics script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-679TB9WYFR"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-679TB9WYFR');
          `}
        </script>
      </head>
      <body className="gym-body">
        <Nav />
        <main style={{ minHeight: "80vh" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

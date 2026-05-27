import '@/styles/globals.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
// import AntigravityBackground from './components/AntigravityBackground';
import React from 'react';

export const metadata = {
  title: 'Creavie Marketing — Premium Digital Marketing Agency',
  description: 'Creavie Marketing is a forward-thinking digital marketing agency delivering brand strategy, UI/UX design, web development, and high-impact campaigns that grow traffic and increase revenue.',
  keywords: 'Creavie Marketing, digital marketing agency, brand strategy, ui ux design, web development, SEO',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* Orbs removed for clean white design */}

        {/* Navigation */}
        <NavBar />

        {/* Page content */}
        <main style={{ position: 'relative', zIndex: 2 }}>
          {children}
        </main>

        {/* Footer (includes Ready-to-Launch CTA banner) */}
        <Footer />
      </body>
    </html>
  );
}

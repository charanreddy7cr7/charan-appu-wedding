import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apoorva Reddy Gonegari ♾ Charan Reddy Jaidi — November 2026",
  description: "Join us as we celebrate the beginning of forever. Mehendi · Engagement · Haldi · Ceremony · Wedding · Reception — November 19–22, 2026.",
  openGraph: {
    title: "Apoorva ♾ Charan — November 2026",
    description: "You are invited to our wedding celebration.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}

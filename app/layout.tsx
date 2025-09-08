import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Irfan - Cybersecurity Specialist",
  description: "Portfolio of Irfan, a cybersecurity specialist, penetration tester, and ethical hacker showcasing expertise in red team operations, security research, and Python development.",
  keywords: "cybersecurity, penetration testing, ethical hacker, security researcher, red team, blue team, OSCP, Python developer",
  authors: [{ name: "Irfan" }],
  openGraph: {
    title: "Irfan - Cybersecurity Specialist",
    description: "Portfolio of Irfan, a cybersecurity specialist and penetration tester",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Irfan - Cybersecurity Specialist",
    description: "Portfolio of Irfan, a cybersecurity specialist and penetration tester",
    creator: "@irfan_sec",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

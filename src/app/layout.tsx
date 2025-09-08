import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Irfan Ali - Cybersecurity Expert & Ethical Hacker",
  description: "Portfolio of Irfan Ali - Cybersecurity Expert, Ethical Hacker, Security Researcher, and Python Developer specializing in penetration testing and security research.",
  keywords: "cybersecurity, ethical hacker, penetration testing, security researcher, python developer, bug bounty",
  authors: [{ name: "Irfan Ali" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

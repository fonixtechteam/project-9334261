import type { Metadata } from "next";
import { Roboto, Pacifico } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});

export const metadata: Metadata = {
  title: "Ethics & Boards - Admin Dashboard",
  description: "Governance intelligence and advisory platform for board evaluation surveys",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${roboto.variable} ${pacifico.variable} antialiased`}
        style={{
          fontFamily:
            "var(--font-roboto), sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
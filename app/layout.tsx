import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


export const metadata: Metadata = {
  title: "Zach Technologies Industries",
  description: "Technology Beyound Possibilities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`antialiased ${inter.className} overflow-x-hidden max-w-[100dvw]`}
      >
        <Navbar />
        <main className=" max-w-[100dvw] overflow-x-hidden">{children}
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#1E1E3F",
                color: "#fff",
                borderRadius: "12px",
              },
              success: {
                iconTheme: {
                  primary: "#00E0FF",
                  secondary: "#1E1E3F",
                },
              },
            }}
          />
        </main>
      </body>
    </html>
  );
}

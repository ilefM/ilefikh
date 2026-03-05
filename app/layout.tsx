import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Mohammed Ilef Ikhelef",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full max-w-300 mx-auto px-4">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

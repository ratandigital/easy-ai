import { Inter } from "next/font/google";
import "./globals.css";
import '../public/css/plugins8a54.css'
import '../public/css/style8a54.css'
import '../public/css/custom.css'
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eassy AI",
  description: "Life is completly easy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script type="text/javaScript" src="../js/jquery8a54.js"></Script>
<Script type="text/javaScript" src="../js/plugins8a54.js"></Script>

<Script type="text/javaScript" src="../js/init8a54.js"></Script>
    </html>
  );
}

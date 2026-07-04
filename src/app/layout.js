import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

import "./globals.css";
import { Story_Script } from "next/font/google";

const storyScript = Story_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--story-script",
});

export const metadata = {
  title: "Legend Store",
  description: "A simple store for your favorite products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-full flex flex-col justify-between ${storyScript.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

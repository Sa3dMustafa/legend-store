import "./globals.css";

export const metadata = {
  title: "Legend Store",
  description: "A simple store for your favorite products.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className= "h-full"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

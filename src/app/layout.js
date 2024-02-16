import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rajat Kumar | Web Developer",
  description: "I'm a web developer based in India. I specialize in building and designing websites and web applications. I'm passionate about learning new technologies and improving the lives of those around me.",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}



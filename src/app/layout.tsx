import Sidebar from "../components/Sidebar";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = { title: "Kulshresth Jangid Portfolio" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mono.variable}>
      <Sidebar />
      <body>{children}</body>
    </html>
  );
}

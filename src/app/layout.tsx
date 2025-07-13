import "./globals.css";
import Sidebar from "../components/Sidebar";
import Loader from "../components/Loader";

/* 1️⃣  Import JetBrains Mono (or whatever font you want) */
import { JetBrains_Mono } from "next/font/google";

/* 2️⃣  Create the font variable */
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono", // optional CSS var
});

export const metadata = {
  title: "Kulshresth Jangid | Portfolio",
  description: "Full‑stack developer & problem solver.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mono.variable}>
        <head>
            <link rel="icon" href="/_.jpeg" />
        </head>
      <body className="bg-base text-gray-200 font-mono">
        <Loader>
          <Sidebar />
          {children}
        </Loader>
      </body>
    </html>
  );
}

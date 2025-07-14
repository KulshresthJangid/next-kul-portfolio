import "./globals.css";
import Sidebar from "../components/Sidebar";
import Loader from "../components/Loader";
import { SpeedInsights } from "@vercel/speed-insights/next"
import AnimatedCursor from "react-animated-cursor";
import { JetBrains_Mono } from "next/font/google";

const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  title: "Kulshresth Jangid | Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mono.variable}>
      <body className="bg-base text-gray-200 font-mono">
        {/* ⬇️ Custom cursor */}
        <SpeedInsights />
        <AnimatedCursor
          innerSize={8}
          outerSize={32}
          color="0, 240, 255" // #00f0ff in RGB
          outerAlpha={0.15}
          outerScale={2.5}
          innerScale={1}
          trailingSpeed={8}
          showSystemCursor={false} // hide default pointer
          outerStyle={{
            mixBlendMode: "difference", // looks great on dark BG
          }}
        />

        <Loader>
          <Sidebar />
          {children}
        </Loader>
      </body>
    </html>
  );
}

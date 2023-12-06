import ActiveSectionContextProvider from "@/context/active-section-context";
import Header from "./components/header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aditya Nakadi | Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative overflow-x-hidden pt-28 sm:pt-36`}
      >
        <div className="absolute bg-[#e9defa] top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] -z-10 sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem]"></div>
        <div className="absolute bg-[#fbfcdb] top-[-6rem] right-[-11rem] h-[31.25rem] w-[31rem] rounded-full blur-[10rem] -z-10 sm:w-[68.75rem]"></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}

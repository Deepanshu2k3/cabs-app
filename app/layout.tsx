import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import NavBar from "@/components/NavBar";
import { useState } from "react";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //const [userLoacation, serUserLocation] = useState();
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <NavBar  />
          {children}

         <div className="ml-6 mt-8">
          <h3>Developed by <a className="underline" href="https://github.com/deepanshu2k3">Deepanshu</a> </h3>
         </div>
        </body>   
      </html>
    </ClerkProvider>
  );
}

"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/navbar";
import "./globals.css";

import { json } from "stream/consumers";




export default function RootLayout({children}){
  

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        
      </body>
    </html>
  );
}

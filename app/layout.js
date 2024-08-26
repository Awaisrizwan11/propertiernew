"use client";
import React, { useState, useEffect } from "react";
import "./globals.css";
import Header from "@/components/header";
import FooterSection from "@/components/footer";
import { Poppins } from "next/font/google";
import { ChatContext } from "@/Contexts/ChatContext";
import { Toaster } from "react-hot-toast";
import { useRouter, usePathname } from "next/navigation";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const [isUser, setIsUser] = useState(false);

  const hasWindow = typeof window !== "undefined";

  let loggedIn;

  if (hasWindow) {
    loggedIn = localStorage.getItem("user") ? true : false;
  }

  const history = useRouter();
  const path = usePathname();

  useEffect(() => {
    document.title = "Propertier";
  }, []);

  useEffect(() => {
    setIsUser(loggedIn);
    if (isUser && path === "/") {
      // history.push("/");
    } else if (!loggedIn) {
      history.push("/");
    }
  }, [isUser, loggedIn]);

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/globals.css" />
      </head>
      <body className={poppins.className}>
        <div className="">
          <ChatContext.Provider
            value={{
              isUser,
              setIsUser,
            }}
          >
            <Toaster />
            <Header />

            {children}
          </ChatContext.Provider>
        </div>
        <FooterSection />
      </body>
    </html>
  );
}

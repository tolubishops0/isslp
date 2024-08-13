import React from "react";
import SideBar from "./SideBar";

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full dark:text-white dark:bg-[#141124] flex">
      <div
        style={{
          boxShadow: "0px 17px 40px 4px #7090B01C",
        }}
        className="w-[20%]">
        <SideBar />
      </div>
      <main className="min-h-screen w-[80%]">{children} </main>
    </div>
  );
}

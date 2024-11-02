import React from "react";
import SideBar from "./SideBar";

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full bg-[#141124] flex">
      {/* <div
        style={{
          boxShadow: "0px 17px 40px 4px #7090B01C",
        }}
        className="w-[260px] h-full flex-shrink-0">
        <SideBar />
      </div> */}
      <main className="min-h~-screen w-full">{children} </main>
    </div>
  );
}

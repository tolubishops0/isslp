import React from "react";

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full bg-[#090E2F] flex">
      <main className="min-h~-screen w-full">{children} </main>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import { loginimg } from "@/lib/utils";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" bg-auth-gradient-bg flex justify-start">
      <div className="hidden lg:block w-1/2 h-full">
        <Image
          src={loginimg}
          alt="auth-sideimage"
          className="h-full w-full object-cover"
        />
      </div>
      <main className="w-[90%] mx-auto md:w-[75%] lg:w-1/2">
        {children}
      </main>
    </div>
  );
}

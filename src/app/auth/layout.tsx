import React from "react";
import Image from "next/image";
import { loginimg } from "@/lib/utils";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-auth-gradient-bg">
      <div className="hidden lg:block w-1/2 h-full">
        <Image
          src={loginimg}
          alt="auth-sideimage"
          className="h-full w-full object-cover"
        />
      </div>
      <main className="w-[90%] md:w-[75%] lg:w-1/2 h-full pt-[2rem]">{children}</main>
    </div>
  );
}

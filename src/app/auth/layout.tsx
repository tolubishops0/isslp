"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { loginimg } from "@/lib/utils";
import { ProfileContext } from "./ProfileContext";
import ChatBot from "./ChatBot";
import Loader from "@/components/commonComp/Loader";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showChatBot =
    pathname === "/auth/select-country" || pathname === "/auth/todo";

  return (
    <ProfileContext>
      <div className="flex justify-start">
        <div className="relative hidden lg:block w-1/2 h-[100vh]">
          <Image
            src={loginimg}
            alt="auth-sideimage"
            className="min-h-screen w-full object-cover"
          />
          {showChatBot && (
            <div className="z-30 absolute top-[5%] left-[5%] w-[85%]">
              <ChatBot />
            </div>
          )}
        </div>
        <Suspense fallback={<Loader />}>
          <main className="w-[90%] mx-auto md:w-[75%] lg:w-1/2">
            {children}
          </main>
        </Suspense>
      </div>
    </ProfileContext>
  );
}

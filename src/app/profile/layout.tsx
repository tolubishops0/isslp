"use client";
import React, { useState } from "react";
import Image from "next/image";
import { loginimg } from "@/lib/utils";
import ChatBot from "@/app/profile/ChatBot";
import { ProfileContext } from "./ProfileContext";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProfileContext>
      <div className=" flex justify-start">
        <div className="relative hidden lg:block w-1/2 h-[100vh]">
          <Image
            src={loginimg}
            alt="auth-sideimage"
            className="h-full w-full object-cover"
          />
          <div className="z-30 absolute top-[5%] left-[5%] w-[85%]">
            <ChatBot />
          </div>
        </div>
        <main className="w-[90%] mx-auto md:w-[75%] lg:w-1/2">{children}</main>
      </div>
    </ProfileContext>
  );
}

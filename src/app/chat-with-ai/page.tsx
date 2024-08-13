"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { avatar, ligthnin, arrright } from "@/lib/utils";
import GradientButton from "@/components/commonComp/GradientBorderButton";
import Button from "@/components/commonComp/Button";

export default function ChatWithAI() {
  const router = useRouter()
  return (
    <main className="relative h-[92%] w-[90%] my-[2rem] mx-auto">
      <div className="relative flex flex-col h-full">
        <div className="z-0 absolute inset-0 flex justify-center items-center">
          <Image src={ligthnin} alt="auth-sideimage" className="" />
        </div>
        <div className="fixed top-[7%] w-[72%]">
          <div className="mx-auto">
            <div className="flex justify-between items-center">
              <span className="font-bold text-white text-[2.125rem]">
                Chat UI
              </span>
              {/* <Link
                href="#"
                className="bg-[#2B2549] border-[.5rem] border-transparent rounded-full">
                <Image src={avatar} alt="auth-sideimage" className="w-8" />
              </Link> */}
              <div className="hidden md:flex items-center gap-x-4">
                <div
                  onClick={() => router.push("/auth?type=login")}
                  className="w-[9rem]">
                  <GradientButton text="Login" />
                </div>
                <div
                  onClick={() => router.push("/auth?type=signup")}
                  className="w-[9rem]">
                  <Button gradient="true" text="Sign up" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="z-10 flex-col h-[calc(100%-3.5rem)] overflow-auto pt-[3.5rem] px-4">
          <div className="bg-white text-black p-3 mb-2 rounded-md">
            <p>Hello! How can I help you today?</p>
          </div>
        </div> */}
        <div className="absolute bottom-0 w-full">
          <form className="w-full mx-auto flex item-center h-[3.5rem] gap-x-4">
            <input
              className="w-[92%] text-[1rem] border border-[#413A61] rounded-[6px] bg-[#2B2549] pl-[1rem] placeholder:text-[#98a2b3] placeholder:font-normal placeholder:text-[0.85rem]"
              placeholder="Send a message"
            />
            <button className="flex items-center justify-center w-[8%] border border-[#413A61] rounded-[6px] h-full bg-[#2B2549] placeholder:text-[#98a2b3]">
              <Image src={arrright} alt="auth-sideimage" className="" />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

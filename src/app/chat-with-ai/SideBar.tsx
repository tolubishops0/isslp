"use client";
import React from "react";
import Image from "next/image";

import { logo, sparkles, schedule } from "../../../src/lib/utils";
import Link from "next/link";

type HistoryProps = {
  id: number;
  title: string;
};

export default function SideBar() {
  return (
    <div className="min-h-screen">
      <div className="border-b border-[#373640] ">
        <Image src={logo} alt="auth-sideimage" className="py-[1.5rem] px-4 " />
      </div>
      <div className="px-4 mt-4">
        <div className="flex items-center gap-x-2">
          <Image src={sparkles} alt="auth-sideimage" className="" />
          <span className="font-extrabold text-white">Chat UI</span>
        </div>
        <div className="text-[#EAEEF8] mt-[1rem]">
          <History />
        </div>
      </div>
    </div>
  );
}

const History = () => {
  const shortenTile = (title: string) => {
    const maxlength = 35;
    return title.length > maxlength
      ? title.substring(0, maxlength - 3) + "..."
      : title;
  };
  return (
    <div className="">
      <div className="flex items-center gap-x-2">
        <Image src={schedule} alt="auth-sideimage" className="" />
        <span className="font-normal ">History</span>
      </div>
      <div
        style={{
          overflowY: "scroll",
          height: " 22rem",
          scrollbarWidth: "none",
          // msOverflowX: "none",
        }}
        className=" ">
        <div className=" flex flex-col mt-[.5rem]">
          {historylink.map((item) => (
            <Link
              key={item.title}
              href="/"
              className="h-[2.5rem] flex items-center pl-3 text-[0.8rem] hover:text-[#acb5ca] hover:bg-[#55535c] transition duration-300 ease-in">
              {shortenTile(item.title)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
const historylink: HistoryProps[] = [
  { id: 1, title: "Exploring new recipes for weekend brunch" },
  { id: 2, title: "Planning a spontaneous road trip adventure" },
  { id: 3, title: "Binge-watching a classic movie marathon" },
  { id: 4, title: "Taking up gardening as a new hobby" },
  { id: 5, title: "Learning to play the guitar online" },
  { id: 6, title: "Experimenting with homemade ice cream flavors" },
  { id: 7, title: "Researching minimalist home decor ideas" },
  { id: 8, title: "Practicing mindfulness and meditation daily" },
  { id: 9, title: "Trying out a vegan diet challenge" },
  { id: 10, title: "Planning a backyard barbecue with friends" },
];

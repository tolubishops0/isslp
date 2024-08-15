"use client";
import React from "react";
import Image from "next/image";

import {
  logo,
  sparkles,
  schedule,
  logout,
  settings,
  avatar,
} from "../../../src/lib/utils";
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
      <div className="px-4 pt-4">
        <div className="flex items-center gap-x-2">
          <Image src={sparkles} alt="auth-sideimage" className="" />
          <span className="font-bold text-white text-base">Chat UI</span>
        </div>
        <div className="text-[#EAEEF8] my-[1.5rem] ">
          <div className="flex items-center gap-x-2 mb-1">
            <Image src={schedule} alt="auth-sideimage" className="w-5" />
            <span className="font-normal ">History</span>
          </div>
          <History />
        </div>
      </div>
      <div className="absolute bottom-[5%] w-[14rem] px-4">
        <Link href="#" className="flex items-center gap-x-2">
          <Image src={settings} alt="auth-sideimage" className="w-5" />
          <span className="font-normal text-white hover:text-[#acb5ca] transition duration-300 ease-in">
            Settings
          </span>
        </Link>
        {/* <Link
          href="#"
          style={{
            boxShadow: "0px 17px 40px 4px #7090B01C",
            border: "1px solid transparent",
            borderRadius: "1.875rem",
            height: "2.6rem",
            padding: "0 .5rem",
          }}
          className="mt-3 flex items-center justify-between bg-[#2E294A] hover:bg-[#424268] transition duration-300 ease-in">
          <div className="flex items-center gap-x-2">
            <Image src={avatar} alt="auth-sideimage" className="w-7" />
            <span className="font-light text-sm ">Adela</span>
          </div>
          <Image src={logout} alt="auth-sideimage" className="w-6" />
        </Link> */}
      </div>
    </div>
  );
}

const History = () => {
  const shortenTile = (title: string) => {
    const maxlength = 30;
    return title.length > maxlength
      ? title.substring(0, maxlength - 3) + "..."
      : title;
  };
  return (
    <div className="">
      <div
        style={{
          overflowY: "scroll",
          height: "22rem",
          scrollbarWidth: "none",
          // msOverflowX: "none",
        }}
        className=" ">
        <div className="flex flex-col">
          {historylink.map((item) => (
            <Link
              key={item.title}
              href="#"
              className="h-[2.3rem] flex items-center pl-3 text-[0.8rem] rounded-sm hover:text-[#acb5ca] hover:bg-[#55535c] transition duration-300 ease-in">
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
  // { id: 5, title: "Learning to play the guitar online" },
  // { id: 6, title: "Experimenting with homemade ice cream flavors" },
  // { id: 7, title: "Researching minimalist home decor ideas" },
  // { id: 8, title: "Practicing mindfulness and meditation daily" },
  // { id: 9, title: "Trying out a vegan diet challenge" },
  // { id: 10, title: "Planning a backyard barbecue with friends" },
  // { id: 11, title: "Researching minimalist home decor ideas" },
  // { id: 12, title: "Practicing mindfulness and meditation daily" },
  // { id: 13, title: "Trying out a vegan diet challenge" },
  // { id: 14, title: "Planning a backyard barbecue with friends" },
];

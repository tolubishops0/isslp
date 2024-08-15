"use client";
import React, { useState, useRef } from "react";
import {
  logo,
  menu,
  cancel,
  navLinks,
  arrowndown,
  whitedropdown,
  gradarrowndown,
} from "../../lib/utils";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useClickAway } from "react-use";
import Button from "../commonComp/Button";
import GradientButton from "../commonComp/GradientBorderButton";
import { NavLink } from "../../../types/global";

export default function Nav() {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLDivElement>(null);
  const [togggleMenuButton, setTogggleMenuButton] = useState<boolean>(false);
  const [showSubMenu, setShowSubMenu] = useState<string | "">("");

  useClickAway(ref, (event) => {
    const target = event.target as Node;
    if (menuButtonRef.current && menuButtonRef.current.contains(target)) {
      return;
    }
    setShowSubMenu("");
    setTogggleMenuButton(false);
  });

  const toggleMenuIcon = () => {
    setTogggleMenuButton(!togggleMenuButton);
  };

  const toggleMenu = (item: NavLink) => {
    setShowSubMenu(showSubMenu === item.label ? "" : item.label);
  };

  const handleMenuSelection = (item: NavLink) => {
    setTogggleMenuButton(false);
    setShowSubMenu("");
    console.log("clicked");
  };

  return (
    <nav className="w-[90%] mx-auto">
      <div className="h-[6rem] flex items-center justify-between">
        <div className="z-30 w-[50%] md:w-fit">
          <Image alt="logo-image" src={logo} />
        </div>

        <div
          ref={ref}
          className="z-[1000] hidden w-fit md:flex gap-x-4 xl:gap-x-8 relatve">
          {navLinks.map((item, index) => (
            <div key={index} className="relative ">
              <div
                onClick={() => toggleMenu(item)}
                className={`cursor-pointer flex items-center gap-x-1 font-bold text-normal leading-normal transition duration-300 hover:text-[rgba(255,255,255,0.9)] ${
                  showSubMenu === item.label ? "active-tab" : "text-white"
                } `}>
                {item.label}
                <Image
                  alt="arr-image"
                  src={
                    showSubMenu === item.label ? gradarrowndown : whitedropdown
                  }
                  className="mt-1"
                />
              </div>
              <div className="absolute left-[20%] top-[250%] w-[35rem]">
                {showSubMenu === item.label && (
                  <motion.div
                    {...framerSidebarBackground}
                    className="p-[2rem] max-h-[24rem] flex flex-wrap gap-y-[2rem] justify-between bg-[#1C2440] border border-[rgba(255,255,255,0.3)] rounded-lg">
                    {item.subMenu.map((menu, subIndex) => (
                      <div
                        onClick={() => handleMenuSelection(item)}
                        className="w-[45%] text-white flex flex-col gap-y-1 cursor-pointer  transition duration-300 hover:text-[rgba(255,255,255,0.6)]"
                        key={subIndex}>
                        <div className="flex items-center gap-x-2">
                          {menu.icon && (
                            <Image
                              alt="logo-image"
                              src={menu.icon}
                              className="w-[1rem]"
                            />
                          )}
                          <p className="text-sm font-semibold ">{menu.label}</p>
                        </div>
                        <p className="font-[100] text-xs">{menu.label2}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="z-[1000] hidden md:flex items-center gap-x-4">
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

        <div
          className="z-30 md:hidden transition duration-1000 delay-100 cursor-pointer w-7"
          ref={menuButtonRef}
          onClick={toggleMenuIcon}>
          <Image alt="menu-image" src={togggleMenuButton ? cancel : menu} />
        </div>

        <AnimatePresence mode="wait" initial={false}>
          {togggleMenuButton && (
            <motion.div
              ref={ref}
              className="md:hidden fixed top-0 left-0 z-20 bg-[#1C2440] w-[60%] min-h-screen"
              {...framerSidebarPanel}>
              <div
                className={`mt-[8rem] ml-[1.2rem] ${
                  togggleMenuButton ? " flex flex-col gap-y-6" : ""
                }`}>
                {navLinks.map((item, index) => (
                  <div key={index}>
                    <div
                      onClick={() => toggleMenu(item)}
                      className={`flex items-center gap-x-1 font-bold text-normal leading-normal ${
                        showSubMenu === item.label ? "active-tab" : "text-white"
                      }`}>
                      {item.label}
                      <Image
                        alt="arr-image"
                        src={
                          showSubMenu === item.label
                            ? gradarrowndown
                            : whitedropdown
                        }
                      />
                    </div>
                    <AnimatePresence mode="wait" initial={false}>
                      {showSubMenu === item.label && (
                        <motion.div
                          {...framerSubMenuPanel}
                          className="flex flex-col gap-y-4">
                          {item.subMenu.map((menu, subIndex) => (
                            <p
                              onClick={() => handleMenuSelection(item)}
                              className="cursor-pointer text-white text-sm font-semibold active:text-[rgba(255,255,255,0.6)]"
                              key={subIndex}>
                              {menu.label}
                            </p>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

const framerSidebarPanel = {
  initial: { x: "-100%" },
  animate: { x: 0 },
  exit: { x: "-100%" },
  transition: { duration: 0.3, delay: 0.1 },
};

const framerSubMenuPanel = {
  initial: { opacity: 0, x: 0 },
  animate: { opacity: 1, x: "10%" },
  exit: { opacity: 0, x: "-10%" },
  transition: { duration: 0.2, delay: 0.1 },
};

const framerSidebarBackground = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.3 },
};

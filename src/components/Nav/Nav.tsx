"use client";

import React, { useState, useRef } from "react";
import { logo, menu, cancel, navLinks, arrowndown } from "../../../lib/utils";
import Image from "next/image";
import { AnimatePresence, delay, motion } from "framer-motion";
import { useClickAway } from "react-use";

export default function Nav() {
  const ref = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLDivElement>(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(
    Array(navLinks.length).fill(false)
  );

  useClickAway(ref, (event) => {
    const target = event.target as Node;
    if (menuButtonRef.current && menuButtonRef.current.contains(target)) {
      return;
    }
    setOpenMenu(false);
  });

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    if (!openMenu) {
      setOpenSubMenu(Array(navLinks.length).fill(false));
    }
  };

  const toggleSubMenu = (index: number) => {
    const updatedSubMenus = [...openSubMenu];
    updatedSubMenus[index] = !updatedSubMenus[index];
    setOpenSubMenu(updatedSubMenus);
  };

  const handleMenuSelection = (item: string) => {
    setOpenMenu(!openMenu);
    console.log(item);
  };

  return (
    <header className="w-[90%] mx-auto ">
      <div className="h-[6rem] flex items-center justify-between">
        <div className="w-[10%] md:w-[8%] z-10">
          <Image alt="logo-image" src={logo} />
        </div>

        <div className="hidden w-[30%] md:flex gap-x-8 xl:gap-x-20 relative">
          {navLinks.map((item, index) => (
            <div key={index} className="relative w-1/2 ">
              <div
                onClick={() => toggleSubMenu(index)}
                key={index}
                className="hidden relative cursor-pointer md:flex items-center gap-x-2 font-bold text-normal leading-normal text-primary">
                {item.label}
                <Image alt="arr-image" src={arrowndown} />
              </div>
              <div className="absolute -left-3 top-full w-full">
                {openSubMenu[index] && (
                  <motion.div
                    {...framerSidebarBackground}
                    className="flex flex-col gap-y-4 pt-[2.5rem] pb-[1rem] pl-[1rem] bg-white rounded-lg">
                    {item.subMenu.map((menu, index) => (
                      <p
                        onClick={() => handleMenuSelection(item.label)}
                        className="cursor-pointer text-primary font-semibold leading-[1.375] hover:text-slate-900"
                        key={index}>
                        {menu.label}
                      </p>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:flex  items-center justify-center w-[9rem] h-[3.125rem] rounded-lg bg-black text-white font-semibold leading-[1.375] active:scale-105 hover:bg-slate-900">
          <button className="">Sign up</button>
        </div>

        <div
          className="z-10 md:hidden transition duration-1000 delay-100 cursor-pointer"
          ref={menuButtonRef}
          onClick={toggleMenu}>
          <Image alt="menu-image" src={openMenu ? cancel : menu} />
        </div>

        <AnimatePresence mode="wait" initial={false}>
          {openMenu && (
            <>
              <motion.div
                ref={ref}
                className="md:hidden fixed top-0 left-0 bg-white w-[60%]  min-h-screen"
                {...framerSidebarPanel}>
                <div
                  className={`mt-[8rem] ml-[1.2rem] ${
                    openSubMenu ? " flex flex-col gap-y-6" : ""
                  }`}>
                  {navLinks.map((item, index) => (
                    <>
                      <div
                        onClick={() => toggleSubMenu(index)}
                        key={index}
                        className="flex items-center gap-x-1 font-bold text-normal leading-normal ">
                        {item.label}
                        <Image alt="arr-image" src={arrowndown} />
                      </div>
                      <AnimatePresence mode="wait" initial={false}>
                        {openSubMenu[index] && (
                          <motion.div
                            {...framerSubMenuPanel}
                            className="flex flex-col gap-y-4">
                            {item.subMenu.map((menu, index) => (
                              <p
                                onClick={() => handleMenuSelection(item.label)}
                                className=""
                                key={index}>
                                {menu.label}
                              </p>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
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

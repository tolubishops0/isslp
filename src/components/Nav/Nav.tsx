"use client";

import React, { useState, useRef } from "react";
import { logo, menu, cancel, navLinks, arrowndown } from "../../lib/utils";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useClickAway } from "react-use";
import Link from "next/link";

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

  const handleMenuSelection = (index: number, item: string) => {
    setOpenMenu(false);
    const updatedSubMenus = [...openSubMenu];
    updatedSubMenus[index] = false;
    setOpenSubMenu(updatedSubMenus);
  };

  return (
    <nav className="w-[90%] mx-auto">
      <div className="h-[6rem] flex items-center justify-between">
        <div className="w-[3rem] md:w-[3.5rem] z-30">
          <Image alt="logo-image" src={logo} />
        </div>

        <div className="hidden w-fit md:flex gap-x-4 xl:gap-x-8 relative">
          {navLinks.map((item, index) => (
            <div key={index} className="relative ">
              <div
                onClick={() => toggleSubMenu(index)}
                className="cursor-pointer flex items-center gap-x-2 font-bold text-normal leading-normal text-primary">
                {item.label}
                <Image alt="arr-image" src={arrowndown} />
              </div>
              <div className="z-50 absolute left-0 top-full w-full ">
                {openSubMenu[index] && (
                  <motion.div
                    {...framerSidebarBackground}
                    className="flex flex-col gap-y-4 pt-[2.5rem] pb-[1rem] pl-[1rem] bg-white rounded-lg z-50">
                    {item.subMenu.map((menu, subIndex) => (
                      <p
                        onClick={() => handleMenuSelection(index, item.label)}
                        className="cursor-pointer capitalize text-primary font-semibold leading-[1.375] hover:text-slate-900"
                        key={subIndex}>
                        {menu.label}
                      </p>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className=" cursor-pointer hidden md:flex items-center justify-center w-[9rem] h-[3.125rem] rounded-lg bg-black text-white font-semibold leading-[1.375] active:scale-105 hover:scale-110 transition-all">
          <Link href="/auth?type=login">Login </Link>
        </div>
        <div className=" cursor-pointer hidden md:flex items-center justify-center w-[9rem] h-[3.125rem] rounded-lg bg-black text-white font-semibold leading-[1.375] active:scale-105 hover:scale-110 transition-all">
          <Link href="/auth?type=signup">Sign up</Link>
        </div>

        <div
          className="z-30 md:hidden transition duration-1000 delay-100 cursor-pointer"
          ref={menuButtonRef}
          onClick={toggleMenu}>
          <Image alt="menu-image" src={openMenu ? cancel : menu} />
        </div>

        <AnimatePresence mode="wait" initial={false}>
          {openMenu && (
            <motion.div
              ref={ref}
              className="md:hidden fixed top-0 left-0 z-20 bg-white w-[60%] min-h-screen"
              {...framerSidebarPanel}>
              <div
                className={`mt-[8rem] ml-[1.2rem] ${
                  openSubMenu ? " flex flex-col gap-y-6" : ""
                }`}>
                {navLinks.map((item, index) => (
                  <React.Fragment key={index}>
                    <div
                      onClick={() => toggleSubMenu(index)}
                      className="flex items-center gap-x-1 font-bold text-normal leading-normal">
                      {item.label}
                      <Image alt="arr-image" src={arrowndown} />
                    </div>
                    <AnimatePresence mode="wait" initial={false}>
                      {openSubMenu[index] && (
                        <motion.div
                          {...framerSubMenuPanel}
                          className="flex flex-col gap-y-4">
                          {item.subMenu.map((menu, subIndex) => (
                            <p
                              onClick={() =>
                                handleMenuSelection(index, item.label)
                              }
                              className="cursor-pointer text-primary font-semibold leading-[1.375] hover:text-slate-900"
                              key={subIndex}>
                              {menu.label}
                            </p>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </React.Fragment>
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

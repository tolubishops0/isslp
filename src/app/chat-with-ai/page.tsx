"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  avatar,
  ligthnin,
  arrright,
  cancel,
  gradarrowndown,
  menu,
  navLinks,
  whitedropdown,
  logo,
} from "@/lib/utils";
import GradientButton from "@/components/commonComp/GradientBorderButton";
import Button from "@/components/commonComp/Button";
import { TypeAnimation } from "react-type-animation";
import { AnimatePresence, motion } from "framer-motion";
import { useClickAway } from "react-use";
import { NavLink } from "../../../types/global";

type PromptProps = {
  text: string;
  sender: string;
  id: number;
};

export default function ChatWithAI() {
  const router = useRouter();
  const [messages, setMessages] = useState<PromptProps[] | []>([]);
  const [aiMessage, setAiMessage] = useState<PromptProps | null>(null);
  const [inputValue, setInputValue] = useState<string | "">("");

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
  };

  const aimessage: PromptProps | null = {
    text: "hello my name is ai",
    sender: "ai",
    id: Math.random() + -0.5,
  };

  const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const mockAiResponse = (): Promise<PromptProps> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(aimessage);
        setAiMessage(aimessage);
      }, 2000);
    });
  };

  const submitMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputValue("");
    if (!inputValue.trim()) return;
    setMessages([
      ...messages,
      { text: inputValue, sender: "user", id: Math.random() + 1 },
    ]);
    await mockAiResponse();
  };

  useEffect(() => {
    if (aiMessage) {
      setMessages([...messages, aiMessage]);
    }
  }, [aiMessage]);

  return (
    <main className="relative h-screen w-[90%] mx-auto">
      <div className="relative flex flex-col h-full">
        <div className="z-0 absolute inset-0 flex justify-center items-center">
          <Image src={ligthnin} alt="auth-sideimage" className="" />
        </div>
        <div className="sticky h-[5rem] top-[3%] w-full z-[50]">
          <div className="flex justify-between items-center">
            {/* <span className="font-bold text-white text-[2.125rem] z-[80]">
              Chat UI
            </span> */}
            <div className=" w-[50%] md:w-fit z-[80]">
              <Image alt="logo-image" src={logo} />
            </div>

            <div className="hidden md:flex items-center gap-x-4">
              <div className="w-[9rem]">
                <a
                  href="https://intelligentscholar-app-dev.qudra.io/auth?type=login"
                  target="_blank"
                  rel="noopener noreferrer">
                  <GradientButton text="Login" />
                </a>
              </div>
              <div className="w-[9rem]">
                <a
                  href="https://intelligentscholar-app-dev.qudra.io/auth?type=signup"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Button gradient="true" text="Sign up" />
                </a>
              </div>
            </div>

            <div
              className="md:hidden transition duration-1000 delay-100 cursor-pointer w-7"
              ref={menuButtonRef}
              onClick={toggleMenuIcon}>
              <Image alt="menu-image" src={togggleMenuButton ? cancel : menu} />
            </div>
            {/* <div> */}

            <AnimatePresence mode="wait" initial={false}>
              {togggleMenuButton && (
                <motion.div
                  ref={ref}
                  className="md:hidden fixed top-0 left-0 z-[60] bg-[#1C2440] w-[60%] min-h-screen"
                  {...framerSidebarPanel}>
                  <div className="h-screen flex flex-col justify-between pb-[5rem]">
                    <div
                      className={`mt-[8rem] ml-[1.2rem] ${
                        togggleMenuButton ? " flex flex-col gap-y-[2rem]" : ""
                      }`}>
                      {navLinks.map((item, index) => (
                        <div key={index}>
                          <div
                            onClick={() => toggleMenu(item)}
                            className={`flex items-center gap-x-1 font-bold text-normal leading-normal ${
                              showSubMenu === item.label
                                ? "active-tab"
                                : "text-white"
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

                    <div className="px-5 ">
                      <div className="w-full">
                        <a
                          href="https://intelligentscholar-app-dev.qudra.io/auth?type=login"
                          target="_blank"
                          rel="noopener noreferrer">
                          <GradientButton text="Login" />
                        </a>
                      </div>
                      <div className="w-full mt-4">
                        <a
                          href="https://intelligentscholar-app-dev.qudra.io/auth?type=signup"
                          target="_blank"
                          rel="noopener noreferrer">
                          <Button gradient="true" text="Sign up" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className=" hidden md:flex items-center gap-x-4">
                    <div className="w-[9rem]">
                      <a
                        href="https://intelligentscholar-app-dev.qudra.io/auth?type=login"
                        target="_blank"
                        rel="noopener noreferrer">
                        <GradientButton text="Login" />
                      </a>
                    </div>
                    <div className="w-[9rem]">
                      <a
                        href="https://intelligentscholar-app-dev.qudra.io/auth?type=signup"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Button gradient="true" text="Sign up" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="z-0 w-full my-[2rem] md:my-[1rem]">
          <div
            style={{
              overflowY: "scroll",
              height: "calc(100vh - 11rem)",
              scrollbarWidth: "none",
            }}
            className="flex flex-col gap-y-[1.5rem]">
            <div className="bg-[#3B3E5D] text-white p-3 w-fit h-fit lg:h-[3rem] rounded-md ">
              <TypeAnimation
                sequence={["Hello there, how can i help you today?"]}
                wrapper="span"
                repeat={0}
                cursor={false}
                preRenderFirstString={true}
              />
            </div>
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et maiores molestiae dolores. Quia similique quo fugit hic totam tempora quibusdam dicta cumque sit, voluptates aperiam doloribus ex sunt mollitia minima. */}

            <div className="flex flex-col gap-y-[1.5rem]">
              {messages.map((item) => (
                <div
                  className={`bg-[#3B3E5D] text-white p-3 rounded-md mb-2 max-w-[20rem] ${
                    item.sender === "user" ? "self-end" : "self-start"
                  }`}
                  key={item.id}>
                  {item.sender === "user" ? (
                    <p>{item.text}</p>
                  ) : (
                    <TypeAnimation
                      key={item.id}
                      sequence={[item.text]}
                      wrapper="span"
                      speed={50}
                      repeat={0}
                      cursor={false}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sticky bottom-3 w-full h-[3.5rem] z-0">
          <form
            onSubmit={(e) => submitMessage(e)}
            className="w-full mx-auto flex item-center h-full gap-x-4">
            <input
              value={inputValue}
              className="w-[80%] lg:w-[90%] text-[1rem] text-white border border-[#413A61] rounded-[6px] bg-[#2B2549] pl-[1rem] placeholder:text-[#98a2b3] placeholder:font-normal placeholder:text-[0.85rem]"
              onChange={getInputValue}
            />
            <button
              className={`flex items-center justify-center w-[20%] lg:w-[10%] border border-[#413A61] rounded-[6px] h-full transition duration-300 ease-in  cursor-pointer
              ${inputValue ? "bg-[#2B2549] " : ""} `}>
              <Image src={arrright} alt="auth-sideimage" className="" />
            </button>
          </form>
        </div>
      </div>
    </main>
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

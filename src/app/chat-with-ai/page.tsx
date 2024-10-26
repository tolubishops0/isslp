"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { avatar, ligthnin, arrright } from "@/lib/utils";
import GradientButton from "@/components/commonComp/GradientBorderButton";
import Button from "@/components/commonComp/Button";
import { TypeAnimation } from "react-type-animation";

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
    <main className="relative min-h-screen w-[90%] mx-auto">
      <div className="relative flex flex-col h-full">
        <div className="z-0 absolute inset-0 flex justify-center items-center">
          <Image src={ligthnin} alt="auth-sideimage" className="" />
        </div>
        <div className="sticky h-[4rem] top-[3%] w-full">
          <div className="flex justify-between items-center">
            <span className="font-bold text-white text-[2.125rem]">
              Chat UI
            </span>

            <div className="z-[1000] hidden md:flex items-center gap-x-4">
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
          </div>
        </div>

        <div className="z-10 w-full my-[1rem]">
          <div
            style={{
              overflowY: "scroll",
              height: "calc(100vh - 10rem)",
              scrollbarWidth: "none",
            }}
            className="z-10 flex flex-col gap-y-[1.5rem] h-full overflow-auto py-[2rem] px-4">
            <div className="bg-[#3B3E5D] text-white p-3 w-fit h-[3rem] rounded-md ">
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
                  className={`bg-[#3B3E5D] text-white p-3 rounded-md mb-2  max-w-[20rem] ${
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

        <div className="sticky bottom-[-5%] w-full ">
          <form
            onSubmit={(e) => submitMessage(e)}
            className="w-full mx-auto flex item-center h-[3.5rem] gap-x-4">
            <input
              value={inputValue}
              className="w-[90%] text-[1rem] text-white border border-[#413A61] rounded-[6px] bg-[#2B2549] pl-[1rem] placeholder:text-[#98a2b3] placeholder:font-normal placeholder:text-[0.85rem]"
              placeholder="Send a message"
              onChange={getInputValue}
            />
            <button
              className={`flex items-center justify-center w-[10%] bg-[#2B2549] border border-[#413A61] rounded-[6px] h-full transition duration-300 ease-in  cursor-pointer
               `}>
              <Image src={arrright} alt="auth-sideimage" className="" />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

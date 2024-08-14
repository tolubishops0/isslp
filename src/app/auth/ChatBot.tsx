"use client";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./ProfileContext";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { chatboxnobg, chatboxwithbg, loader } from "@/lib/utils";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  onComplete?: () => void;
};

const TypingText = ({ text, onComplete }: AnimatedTextProps) => {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text?.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, text?.length, {
      type: "tween",
      duration: 4,
      ease: "linear",
      restSpeed: 3,
      onUpdate: (latest) => {
        if (latest === text?.length) {
          setAnimationCompleted(true);
          if (onComplete) onComplete();
        }
      },
    });

    return controls.stop;
  }, [count, text, onComplete]);

  return (
    <p className={animationCompleted ? "animation-completed" : ""}>
      <motion.span className="text-xs text-center">{displayText}</motion.span>
    </p>
  );
};

export default function ChatBot() {
  const { country, todo } = useGlobalContext();
  const pathname = usePathname();
  const [firstTextComplete, setFirstTextComplete] = useState<boolean | "">(
    false
  );
  const [secondTextComplete, setSecondTextComplete] = useState<boolean | "">(
    false
  );
  const [thirdTextComplete, setThirdTextComplete] = useState<boolean | "">(
    false
  );
  const todoPath = pathname === "/auth/todo";

  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-y-2">
        <div className="relative w-[12rem]">
          <Image
            src={chatboxwithbg}
            alt="auth-sideimage"
            className="h-full w-full object-cover"
          />
          <div className="w-[95%] text-xs absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <TypingText
              text="Hi scholar! 👋🏻 I’m I-scholar your personal AI Assistant!"
              onComplete={() => setFirstTextComplete(true)}
            />
          </div>
        </div>

        {firstTextComplete && (
          <div className="relative w-[12rem]">
            <Image
              src={chatboxwithbg}
              alt="auth-sideimage"
              className="h-full w-full object-cover"
            />
            <div className="w-[95%] text-xs absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <TypingText
                text="Which Country are you chatting from?"
                onComplete={() => setSecondTextComplete(true)}
              />
            </div>
          </div>
        )}
      </div>

      {secondTextComplete && (
        <div className="relative w-[10.25rem] h-full float-right">
          <Image
            src={chatboxnobg}
            alt="background-image"
            className="h-full w-full object-cover"
          />
          {country ? (
            <div className="absolute top-[40%] left-[10%] transform -translate-y-1/2 flex items-center gap-x-1 w-full">
              {country?.icon && (
                <Image
                  src={country?.icon}
                  alt="auth-sideimage"
                  className="h-full w-[1rem] object-cover"
                />
              )}
              <TypingText text={country?.option} onComplete={undefined} />
            </div>
          ) : (
            <motion.div
              className="absolute inset-0 top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ scaleX: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}>
              <Image
                src={loader}
                alt="loader-image"
                className="w-[3.5rem] ml-[.6rem]"
              />
            </motion.div>
          )}
        </div>
      )}
      {todoPath && (
        <div className="relative w-[12rem] mt-[3rem]">
          <Image
            src={chatboxwithbg}
            alt="auth-sideimage"
            className="h-full w-full object-cover"
          />
          <div className="w-[95%] text-xs absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <TypingText
              text="Great💪🏻 What would you like to do here?"
              onComplete={() => setThirdTextComplete(true)}
            />
          </div>
        </div>
      )}

      {thirdTextComplete && todoPath && (
        <div className="relative w-[10.25rem] h-full float-right">
          <Image
            src={chatboxnobg}
            alt="background-image"
            className="h-full w-full object-cover"
          />
          {todo ? (
            <div className="absolute top-[40%] left-[10%] transform -translate-y-1/2 flex items-center gap-x-1 w-full">
              <TypingText text={todo} onComplete={undefined} />
            </div>
          ) : (
            <motion.div
              className="absolute inset-0 top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ scaleX: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}>
              <Image
                src={loader}
                alt="loader-image"
                className="w-[3.5rem] ml-[.6rem]"
              />
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}

"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  meshbg,
  rightwireframe,
  lefttwireframe,
  leftbluestart,
  rightyellowstar,
  bluerightframe,
  yellowsmstart,
  pinkblur,
  chatbubble,
} from "../../lib/utils";
import Carousel from "./Carousel";
import HeorForm from "./HeorForm";

export default function Hero() {
  return (
    <main className="relative bg-[rgba(255,244,161,0.1)] flex items-start justify-center">
      <div className="relative w-[90%] mx-auto flex flex-col justify-center  items-center mt-[4rem] mb-[10rem] xl:mt-[8rem] xl:mb-[16rem]">
        <div className="relative w-full xl:w-[70%] flex flex-col items-center justify-center gap-y-[0.5rem] text-left xl:text-center">
          <h1 className="font-bold text-primary text-2xl leading-[2] md:leading-[1.2] md:text-5xl xl:text-[3.25rem]">
            Study with AI. Transform your Learning
          </h1>
          <h2 className="w-[full] xl:w-[80%] text-left xl:text-center text-darkGray font-normal text-base">
            Unlock your potential with personalized study tools. Study 10x
            faster, become 10x better, and ace your exams.
          </h2>

          <motion.div
            className="absolute bottom-[-7%] left-[15.8%] h-auto"
            animate={{
              scale: [0.8, 1.1, 1],
              opacity: [1, 0.9, 1],
            }}
            transition={{
              duration: 3,
              delay: 1,
              repeat: Infinity,
              repeatType: "mirror",
            }}>
            {" "}
            <Image src={yellowsmstart} alt="search-icon" className="h-auto" />
          </motion.div>

          <motion.div
            className="absolute top-[-18%] left-[7%] h-auto "
            animate={{
              scale: [0.8, 1.1, 1],
              opacity: [1, 0.9, 1],
            }}
            transition={{
              duration: 2,
              delay: 1,
              repeat: Infinity,
              repeatType: "mirror",
            }}>
            <Image src={leftbluestart} alt="search-icon" className="h-auto" />
          </motion.div>

          <motion.div
            className="absolute top-[-20%] right-[10%]  h-auto "
            animate={{
              scale: [0.8, 1.1, 1],
              opacity: [1, 0.9, 1],
            }}
            transition={{
              duration: 3,
              delay: 1,
              repeat: Infinity,
              repeatType: "mirror",
            }}>
            {" "}
            <Image
              src={rightyellowstar}
              alt="search-icon"
              className="h-auto w-[2.5rem]"
            />
          </motion.div>
        </div>
        <div className="relative w-full xl:w-[92%] mt-10 z-10">
          <HeorForm />
          <Image
            src={bluerightframe}
            alt="search-icon"
            className="hidden xl:block absolute bottom-[-5%] right-[8.5%] w-[5%] h-auto "
          />
          <Image
            src={pinkblur}
            alt="search-icon"
            className="hidden xl:flex absolute top-0 right-[-10%] w-[30%]"
          />

          <Image
            src={lefttwireframe}
            alt="search-icon"
            className="hidden xl:block absolute bottom-[50%] left-[0%] w-[16%] 2xl:w-[12%] h-auto"
          />
          <Image
            src={rightwireframe}
            alt="search-icon"
            className="hidden xl:block absolute bottom-[110%] right-[2%] w-[13%] 2xl:w-[12%] 2xl:bottom-[40%] "
          />

          <div className="z-[1000] chat-bubble fixed bottom-[13%] right-0 xl:absolute xl:bottom-[-55%] xl:right-[-8%] cursor-pointer active:scale-105 hover:scale-95 transition-all">
            <Image src={chatbubble} alt="search-icon"  />
            <span className="font-semibold text-xs md:text-normal text-white md:leading-relaxed">
              Chat with the smartest bot
            </span>
          </div>
        </div>

        <div className="z-0 absolute top-[0] xl:top-[-13%] left-1/2 transform -translate-x-1/2 -translae-y-1/2 h-auto">
          <Image
            alt="background-img"
            src={meshbg}
            objectFit="contain"
            className="hidden md:block z-0  h-auto"
          />
        </div>
      </div>

      <div className="absolute bottom-0 right-0 overflow-hidden bg-veryDarkGray w-full h-[4.75rem] flex items-center justify-center">
        <Carousel />
      </div>
    </main>
  );
}

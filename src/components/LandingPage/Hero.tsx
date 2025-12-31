"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  meshbg,
  rightwireframe,
  lefttwireframe,
  pinkblur,
  chatbubble,
  leftstart,
  rightsrart,
  heroblur,
} from "../../lib/utils";
import "./styles.css";
import HeorForm from "./HeorForm";
import Carousel from "./Carousel";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="relative flex items-start justify-center">
      <div className="relative w-[90%] max-w-[1400px] mx-auto flex flex-col justify-center items-center mt-[4rem] mb-[10rem] xl:mt-[8rem] xl:mb-[16rem]">
        <div className="z-10 relative w-full xl:w-[70%] flex flex-col items-center justify-center gap-y-[0.5rem] text-left xl:text-center">
          <h1 className="font-bold text-[#FDFBFB] text-2xl leading-[2] md:leading-[1.2] md:text-5xl xl:text-[3.25rem]">
            Study with AI. Transform your Learning
          </h1>
          <h2 className="w-full xl:w-[80%] text-left xl:text-center text-[#D7D4D9] font-normal text-base">
            Unlock your potential with personalized study tools. Study 10x
            faster, become 10x better, and ace your exams.
          </h2>
        </div>

        <div className="relative w-full xl:w-[92%] mt-[6.5rem] z-10">
          <HeorForm />
          <Image
            src={pinkblur}
            alt="search-icon"
            className="hidden xl:flex absolute top-0 right-[-10%] w-[30%]"
          />
          <motion.div
            className="hidden xl:flex w-[2rem] absolute top-[-75%] left-[29%]"
            animate={{ scaleX: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}>
            <Image src={leftstart} alt="search-icon" />
          </motion.div>
          <motion.div
            className="hidden xl:flex w-[2rem] absolute top-[-115%] right-[36%]"
            animate={{ scaleX: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}>
            <Image src={rightsrart} alt="search-icon" />
          </motion.div>
          <Image
            src={lefttwireframe}
            alt="search-icon"
            className="hidden xl:block absolute bottom-[60%] left-[-5%] w-[15%] 2xl:w-[12%] h-auto"
          />
          <Image
            src={rightwireframe}
            alt="search-icon"
            className="hidden xl:block absolute bottom-[120%] right-[-1%] w-[15%] 2xl:w-[12%] 2xl:bottom-[60%] "
          />
          <Link href={"/chat-with-ai"}>
            <div className="z-[1000] chat-bubble fixed bottom-[13%] right-0 xl:absolute xl:bottom-[-55%] xl:right-[-8%] cursor-pointer active:scale-105 hover:scale-95 transition-all">
              <Image src={chatbubble} alt="search-icon" />
              <span className="font-semibold text-xs md:text-normal text-white md:leading-relaxed">
                Chat with the smartest bot
              </span>
            </div>
          </Link>
        </div>

        <div className="z-0 w-full h-full absolute xl:top-[-70%] left-1/2 transform -translate-x-1/2">
          <Image
            alt="background-img"
            src={heroblur}
            className="hidden md:block object-cover opacity-80"
          />
        </div>
        <div className="z-0 absolute top-[0] xl:top-[-13%] left-1/2 transform -translate-x-1/2 h-auto">
          <Image
            alt="background-img"
            src={meshbg}
            objectFit="contain"
            className="hidden md:block z-0 h-auto"
          />
        </div>
      </div>
      <div className="carousel-container">
        <Carousel />
      </div>
    </main>
  );
}

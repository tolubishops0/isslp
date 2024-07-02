"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  meshbg,
  heroForm,
  search,
  help,
  rightwireframe,
  lefttwireframe,
  leftbluestart,
  rightyellowstar,
  intelstar,
  bluerightframe,
  yellowsmstart,
  pinkblur,
} from "../../../lib/utils";
import Carousel from "./Carousel";
import HeorForm from "./HeorForm";

export default function Hero() {
  return (
    // <div className="relative flex items-center justify-center h-screen bg-[rgba(255,244,161,0.1)] bg-green-600">
    //   <div className="relative w-[90%] xl:w-[84%] xl:h-full ">
    //     <div className="absolute top-[5%] md:top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-24 xl:gap-y-12 w-full">
    //       {/* <div className="bg-red-500 absolute top-0  gap-y-16 xl:gap-y-12 w-full"> */}
    //       <div className="w-full xl:w-[70%] mx-auto text-left xl:text-center z-10 flex flex-col justify-center items-center gap-y-6 md:gap-8 xl:gap-y-2 mt-[4rem] md:mt-[6rem] xl:mt-[7rem]">
    //         <h1 className="font-bold text-primary text-2xl leading-[2] md:leading-[1.2] md:text-5xl xl:text-[3.25rem]">
    //           Study with AI. Transform your Learning
    //         </h1>
    //         <h2 className="w-full  text-darkGray font-normal text-base ">
    //           Unlock your potential with personalized study tools. Study 10x
    //           faster, become 10x better, and ace your exams.
    //         </h2>
    //       </div>
    //       <HeorForm />
    //     </div>

    //     <Image
    //       alt="background-img"
    //       src={meshbg}
    //       objectFit="contain"
    //       className="hidden md:block z-0 absolute top-[20%] xl:top-[15%] left-1/2 transform -translate-x-1/2 -translae-y-1/2 w-[70%] md:w-[32%] h-auto"
    //     />

    // <motion.div
    //   className="absolute top-[40%] sm:top-[35%] xsm:top-[30%] left-[50%] md:top-[47%] md:left-[24%] h-auto"
    //   animate={{
    //     scale: [0.8, 1.1, 1],
    //     opacity: [1, 0.9, 1],
    //   }}
    //   transition={{
    //     duration: 3,
    //     delay: 1,
    //     repeat: Infinity,
    //     repeatType: "mirror",
    //   }}>
    //   <Image src={yellowsmstart} alt="search-icon" className="h-auto" />
    // </motion.div>
    // <motion.div
    //   className="absolute top-[5%] md:top-[15%] left-[18%] h-auto "
    //   animate={{
    //     scale: [0.8, 1.1, 1],
    //     opacity: [1, 0.9, 1],
    //   }}
    //   transition={{
    //     duration: 2,
    //     delay: 1,
    //     repeat: Infinity,
    //     repeatType: "mirror",
    //   }}>
    //   <Image src={leftbluestart} alt="search-icon" className="h-auto" />
    // </motion.div>
    //     <motion.div
    //       className="absolute top-[5%] right-[5%] md:top-[11%] md:right-[19%]  h-auto "
    //       animate={{
    //         scale: [0.8, 1.1, 1],
    //         opacity: [1, 0.9, 1],
    //       }}
    //       transition={{
    //         duration: 3,
    //         delay: 1,
    //         repeat: Infinity,
    //         repeatType: "mirror",
    //       }}>
    //       {" "}
    //       <Image src={rightyellowstar} alt="search-icon" className="h-auto " />
    //     </motion.div>

    // <Image
    //   src={bluerightframe}
    //   alt="search-icon"
    //   className="hidden xl:block absolute bottom-[9%] right-[8%] w-[5%] h-auto "
    // />

    // <Image
    //   src={lefttwireframe}
    //   alt="search-icon"
    //   className="hidden xl:block absolute top-[16%] left-[-1%] w-[16%] h-auto "
    // />
    // <Image
    //   src={rightwireframe}
    //   alt="search-icon"
    //   className="hidden xl:block absolute top-[3%] right-[2%] w-[14%]"
    // />
    //   </div>
    // <div className=" absolute bottom-0 right-0 overflow-hidden bg-veryDarkGray w-full h-[4.75rem]">
    //   <Carousel />
    // </div>
    // </div >

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
            className="absolute top-[-38%] right-[9%]  h-auto "
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

          <Image
            src={lefttwireframe}
            alt="search-icon"
            className="hidden xl:block absolute top-[-3.5%] left-[-16%] w-[21%] 2xl:w-[15%] 2xl:right-[-10%] 2xl:top-[0] h-auto "
          />

          <Image
            src={rightwireframe}
            alt="search-icon"
            className="hidden xl:block absolute bottom-[-10%] right-[-13%] w-[16%] 2xl:w-[12%] 2xl:right-[-10%] 2xl:top-[0]"
          />
        </div>
        <div className="relative w-full xl:w-[92%]  mt-10 z-10">
          <HeorForm />
          <Image
            src={bluerightframe}
            alt="search-icon"
            className="hidden xl:block absolute bottom-[-5%] right-[8.5%] w-[5%] h-auto "
          />
          <Image
            src={pinkblur}
            alt="search-icon"
            className="hidden md:flex absolute top-0 right-[-10%] w-[30%]"
          />
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

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { stressedguy, play } from "../../lib/utils";
import YouTube, { YouTubeProps } from "react-youtube";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "waAL-IB2GoI";

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event: { target: YouTubeProps }) => {
    // console.log(event.target);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const onEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div className="bg-[#FAFEFD] py-[3.5rem]">
      <div className="w-[90%] mx-auto">
        <h1 className="font-semibold text-2xl md:text-3xl xl:text-[2rem] text-veryDarkBrown xl:leading-[2.1] text-center">
          Elevate your learning journey with Intelligent Scholar!
        </h1>

        <div className="h-[20rem] md:h-[30rem] 2xl:h-[47rem] w-full relative mt-[2rem]">
          {!isPlaying ? (
            <div className="w-full h-full md:w-[80%] xl:w-[70%] mx-auto overflow-hidden ">
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                src={stressedguy}
                alt="stressed-guy"
                className="h-full w-full rounded-[1rem] md:rounded-[3rem]"
              />
              <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                <Image
                  onClick={handlePlay}
                  src={play}
                  alt="play-icon"
                  className="w-[3rem] md:w-[6rem] cursor-pointer hover:scale-110 transition-all"
                />
              </div>
            </div>
          ) : (
            <div className="w-full md:w-[80%] xl:w-[70%] h-full mx-auto overflow-hidden rounded-[1rem] md:rounded-[3rem]">
              <YouTube
                className="w-full h-full"
                videoId={videoId}
                opts={opts}
                onEnd={onEnd}
                onReady={onReady}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

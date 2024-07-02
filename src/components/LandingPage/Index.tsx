import React from "react";
import Hero from "./Hero";
import Potential from "./Potential";
import Solutions from "./Solutions";
import PastQuestion from "./PastQuestion";
import VideoSection from "./VideoSection";

export default function Index() {
  return (
    <div>
      <Hero />
      <Potential />
      {/* <Solutions /> */}
      <VideoSection/>
      <PastQuestion />
    </div>
  );
}

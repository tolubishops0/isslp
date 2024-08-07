import React from "react";
import Hero from "./Hero";
import Potential from "./Potential";
import Solutions from "./Solutions";
import PastQuestion from "./PastQuestion";
import VideoSection from "./VideoSection";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default function Index() {
  return (
    <>
      <Nav/>
      <Hero />
      <Potential />
      <VideoSection />
      <Solutions />
      <PastQuestion />
      <Footer/>
    </>
  );
}

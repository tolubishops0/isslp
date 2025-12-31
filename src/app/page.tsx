import Footer from "@/components/Footer/Footer";
import Hero from "@/components/LandingPage/Hero";
import PastQuestion from "@/components/LandingPage/PastQuestion";
import Potential from "@/components/LandingPage/Potential";
import Solutions from "@/components/LandingPage/Solutions";
import VideoSection from "@/components/LandingPage/VideoSection";
import Nav from "@/components/Nav/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <VideoSection />
      <Potential />
      <PastQuestion />
      <Solutions />
      <Footer />
    </>
  );
}

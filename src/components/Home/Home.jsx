import React from "react";
import FirstSection from "./First-section/FirstSection";
import AlertSection from "./AlertSection/AlertSection";
import SecondSection from "./SecondSection/SecondSection";
import FourthSection from "./FourthSection/FourthSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import FifthSection from "./FifthSection/FifthSection";
import SixthSection from "./SixthSection/SixthSection";
import YoutubeVideos from "../YoutubeVideos/YoutubeVideos";

function Home() {
  return (
    <>
      <AlertSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <YoutubeVideos/>
    </>
  );
}

export default Home;

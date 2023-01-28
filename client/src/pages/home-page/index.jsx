import React from "react";
import FifthSection from "../../home-sections/fifth-section";
import Firstsection from "../../home-sections/first-section";
import FourthSection from "../../home-sections/fourth-page";
import SecondSection from "../../home-sections/second-section";
import ThirdSection from "../../home-sections/third-section";

const HomePage = ({ wishlists, setWishlists }) => {
  return (
    <div>
      <Firstsection />
      <SecondSection />
      <ThirdSection wishlists={wishlists} setWishlists={setWishlists} />
      <FourthSection />
      <FifthSection />
    </div>
  );
};

export default HomePage;

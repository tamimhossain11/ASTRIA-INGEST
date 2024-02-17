import React, { useEffect } from "react";
import Meta from "../../components/Meta";
import Hero from "../../components/hero/hero";
import Intro_video from "../../components/intro_video";
import Testimonial from "../../components/testimonial/Testimonial";
import { useTheme } from "next-themes";
import Services from "../../components/services/services";

const Home = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  return (
    <>
      <Meta title="Home" />
      <Hero />
      <Intro_video />
      <Services/>
      <Testimonial/>
    </>
  );
};

export default Home;

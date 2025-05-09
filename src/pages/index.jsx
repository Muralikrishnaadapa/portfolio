import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "@library/posts";

import HeroOneSection from "@components/sections/HeroOne";
import AboutSection from "@components/sections/About";
import ServicesSection from "@components/sections/Services";
import TeamSection from "@components/sections/Team";
import LatestPostsSection from "@components/sections/LatestPosts";
import MyCaseStudy from "../components/sections/MyCaseStudy";

const TestimonialSlider = dynamic(
  () => import("@components/sliders/Testimonial"),
  { ssr: false }
);
const PartnersSlider = dynamic(() => import("@components/sliders/Partners"), {
  ssr: false,
});

const Home1 = (props) => {
  return (
    <Layouts>
      <HeroOneSection />
      <AboutSection />
      <ServicesSection id="services" />

      <LatestPostsSection />
      <MyCaseStudy />
      {/* <PartnersSlider /> */}
      {/* <TeamSection /> */}
      <TestimonialSlider />
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();

  return {
    props: {
      posts: allPosts,
    },
  };
}

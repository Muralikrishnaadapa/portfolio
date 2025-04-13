import Data from "@data/sections/my-professional-profile.json";
import LinesIcon from "@layouts/svg-icons/Lines";
import Link from "next/link";
import PageBanner from "@components/PageBanner";
import Header from "../layouts/headers/Index";

const AboutMe = () => {
  return (
    <>
      {/* AboutMe */}
      <section id="about">
        <Header />
        <div className="container">
          <PageBanner breadTitle={"About"} />
          <div className="row">
            <div className="col-lg-12 col-xl-12">
              <div
                className="mil-text mil-up mil-mb-30"
                style={{ letterSpacing: "0.05em", lineHeight: "1.5", fontSize: "1.2rem" }}
                dangerouslySetInnerHTML={{ __html: Data.description }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* AboutMe */}
    </>
  );
};

export default AboutMe;

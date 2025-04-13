import Data from "@data/clicks/clicks.json";
import PageBanner from "@components/PageBanner";
import ImageView from "../components/ImageView";
import { useEffect, useRef } from "react";
import Header from "../layouts/headers/Index";

const Clicks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        ".mil-slide-up",
        {
          y: 1000,
          opacity: 1,
          stagger: 1,
          scale: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.4,
          ease: "ease",
          scale: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    };

    loadGSAP();
  }, []);

  return (
    <>
      {/* Sketches */}
      <section id="about" ref={containerRef}>
        <Header extraClass={"hide back-to-top"} />

        <div className="container">
          <PageBanner breadTitle={"Clicks"} paddingBottom={0} />
          <div className="row mil-iverted">
            <div className="row">
              {Data.map((item, key) => {
                // Check the aspect ratio of the image
                const isPortrait = item.width < item.height; // Assuming you have width/height info in your data

                return (
                  <div
                    key={`gallery-item-${key}`}
                    className={"col-lg-4 col-md-6 col-12 mil-slide-up"}
                  >
                    <div
                      className={`mil-image-frame-sketch ${
                        isPortrait ? "portrait" : "landscape"
                      } mil-square mil-up mil-mb-30`}
                    >
                      <img
                        onClick={() => {}}
                        loading="eager"
                        src={item.image}
                        alt={item.alt}
                        defaultValue={item.alt}
                        className="image-item"
                        style={{
                          objectFit: "cover", // 'cover' scales and crops to fit the container
                          width: "100%",
                          height: "100%",
                          cursor: "pointer",
                        }}
                      />
                      <a
                        data-fancybox="gallery"
                        data-no-swup
                        href={item.image}
                        className="mil-zoom-btn"
                      >
                        <img src="/img/icons/zoom.svg" alt="zoom" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <ImageView />
      </section>
      {/* Sketches */}
    </>
  );
};

export default Clicks;

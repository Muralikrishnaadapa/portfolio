import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const ScrollAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  // image slide-up

  const slideUp = document.querySelectorAll(".mil-slideUp");
  gsap.fromTo(
    slideUp,
    {
      y: 1000,
      opacity: 1,
      delay: 1,
      duration: 0.5,
      stagger: 1,
      scale: 0,
    },
    {
      y: 0,
      opacity: 1,
      delay: 1,
      duration: 0.5,
      stagger: 0.4,
      ease: "ease",
      scale: 1,
      scrollTrigger: {
        trigger: slideUp,
        toggleActions: "play none none reverse",
      },
    }
  );

  // fade in
  const onebyone = document.querySelectorAll(".mil-tool");
  if (window.innerWidth > 964) {
    gsap.fromTo(
      onebyone,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        duration: 1,
        delay: 0.2,
        stagger: 0.4,
        opacity: 1,
        ease: "ease",
        scrollTrigger: {
          trigger: onebyone,
          toggleActions: "play none none reverse",
        },
      }
    );
  } else {
    gsap.to(onebyone, {
      duration: 1,
      stagger: 0.2,
      opacity: 1,
      ease: "ease",
      scrollTrigger: {
        trigger: onebyone,
        toggleActions: "play none none none",
      },
    });
  }

  // appearance
  const appearance = document.querySelectorAll(".mil-up");

  appearance.forEach((section) => {
    gsap.fromTo(
      section,
      {
        opacity: 0,
        y: 40,
        scale: 0.98,
        ease: "sine",
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.4,
        scrollTrigger: {
          trigger: section,
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // scale image
  const scaleImage = document.querySelectorAll(".mil-scale");

  scaleImage.forEach((section) => {
    var value1 = section.getAttribute("data-value-1");
    var value2 = section.getAttribute("data-value-2");

    gsap.fromTo(
      section,
      {
        ease: "sine",
        scale: value1,
      },
      {
        scale: value2,
        scrollTrigger: {
          trigger: section,
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // parallax
  const parallaxImage = document.querySelectorAll(".mil-parallax");

  if (window.innerWidth > 960) {
    parallaxImage.forEach((section) => {
      var value1 = section.getAttribute("data-value-1");
      var value2 = section.getAttribute("data-value-2");

      gsap.fromTo(
        section,
        {
          ease: "sine",
          y: value1,
        },
        {
          y: value2,
          scrollTrigger: {
            trigger: section,
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }

  // rotate
  const rotate = document.querySelectorAll(".mil-rotate");

  rotate.forEach((section) => {
    var value = section.dataset.value;
    gsap.fromTo(
      section,
      {
        ease: "sine",
        rotate: 0,
      },
      {
        rotate: value,
        scrollTrigger: {
          trigger: section,
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // back to top
  const btt = document.querySelector(".mil-back-to-top .mil-link");

  gsap.set(btt, {
    x: -30,
    opacity: 0,
  });

  gsap.to(btt, {
    x: 0,
    opacity: 1,
    ease: "sine",
    scrollTrigger: {
      trigger: "body",
      start: "top -40%",
      end: "top -40%",
      toggleActions: "play none reverse none",
    },
  });

  // progressbar

  gsap.to(".mil-progress", {
    height: "100%",
    ease: "sine",
    scrollTrigger: {
      scrub: 0.3,
    },
  });
};

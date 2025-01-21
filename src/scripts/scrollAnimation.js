import SplitType from "split-type";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

function toggleLightMode() {
  const body = document.body;
  const themeSwitch = document.getElementById("toggle-theme");

  if (localStorage.getItem("switchActive") === null) {
    body.classList.remove("dark");
    themeSwitch.checked = true;
  }
}

function toggleDarkMode() {
  const body = document.body;
  const themeSwitch = document.getElementById("toggle-theme");

  if (localStorage.getItem("switchActive") === null) {
    body.classList.add("dark");
    themeSwitch.checked = false;
  }
}

document.addEventListener("astro:page-load", () => {
  gsap.registerPlugin(ScrollTrigger);

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const sections = [];

  function getSections(el) {
    const section = el.dataset.section || el.dataset.element;

    switch (section) {
      case "menu":
        const menu = menuSection(el);
        sections.push(menu);
        break;
      case "about":
        const about = aboutSection(el);
        sections.push(about);
        break;
      case "grid-service":
        const service = serviceSection(el);
        sections.push(service);
        break;
      case "power-of-music":
        const powerOfMusic = powerOfMusicSection(el);
        sections.push(powerOfMusic);
        break;
      case "gallery-home":
        const galleryHome = galleryHomeSection(el);
        sections.push(galleryHome);
        break;
      case "pre-footer":
        const preFooter = preFooterSection(el);
        sections.push(preFooter);
        break;
      case "footer":
        const footer = footerSection(el);
        sections.push(footer);
        break;
      case "experience-features":
        const experienceFeatures = experienceFeaturesSection(el);
        sections.push(experienceFeatures);
        break;
    }
  }

  const imgs = document.querySelectorAll("img");

  if (imgs) {
    imgs.forEach((img) =>
      img.addEventListener("load", () => {
        ScrollTrigger.refresh();
      })
    );
  }

  function animateTextMayus(el) {
    const textMayus = el.querySelectorAll(".text-mayus .line");
    const triggerMayus = el.querySelector(".text-mayus");

    if (!textMayus || !triggerMayus) return;

    const animationSettings = isMobile
      ? { stagger: 0.01, duration: 0.35 }
      : { stagger: 0.015, duration: 0.35 };

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: triggerMayus,
        start: "top 80%",
      },
    });

    textMayus.forEach((line, i) => {
      const chars = line.querySelectorAll(".char");

      tl2.from(
        chars,
        {
          y: "100%",
          opacity: 0,
          rotationZ: "15deg",
          ease: "power3.out",
          ...animationSettings,
        },
        i * (isMobile ? 0.08 : 0.1)
      );
    });
  }

  function menuSection(el) {
    if (isMobile) {
      const bar = el.querySelector(".bar-scroll");

      const showAnim = gsap
        .from(bar, {
          yPercent: -150,
          paused: true,
          duration: 0.2,
        })
        .progress(1);

      ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse();
        },
      });
    }
  }

  function aboutSection(el) {
    new SplitType(".text-splide-line", { types: "lines", tagName: "span" });
    new SplitType(".text-splide-char", {
      types: "lines, chars",
      tagName: "span",
    });

    const tl = gsap.timeline({ paused: true });

    const title = el.querySelectorAll(".about-title .line");
    const text = el.querySelectorAll(".about-text");
    const videoContainer = el.querySelectorAll(".iframe-container");

    tl.from(title, {
      duration: 0.8,
      y: "0.5em",
      opacity: 0,
      stagger: 0.15,
      ease: "power3.out",
    });

    tl.from(
      text,
      {
        duration: 0.8,
        opacity: 0,
        ease: "power1.out",
      },
      "-=0.6"
    );

    ScrollTrigger.create({
      trigger: el,
      start: "top 75%",
      end: "bottom top",
      animation: tl,
    });

    gsap.to(videoContainer, {
      scale: 1,
      scrollTrigger: {
        trigger: videoContainer,
        start: "top bottom",
        end: "bottom 85%",
        scrub: true,
      },
    });

    ScrollTrigger.create({
      trigger: el,
      start: "bottom 65%",
      onEnter: () => toggleLightMode(),
      onLeaveBack: () => toggleDarkMode(),
    });

    animateTextMayus(el);
  }

  function serviceSection(el) {
    if (isMobile) {
      const items = el.querySelectorAll(".item-service");

      items.forEach((item) => {
        gsap.to(item, {
          duration: 0.8,
          y: 0,
          autoAlpha: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
          },
        });
      });
    } else {
      const goups = el.querySelectorAll(".group-container");

      goups.forEach((group) => {
        const items = group.querySelectorAll(".item-service");

        gsap.to(items, {
          duration: 0.8,
          y: 0,
          autoAlpha: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: group,
            start: "top 80%",
            end: "bottom 20%",
          },
        });
      });
    }
  }

  function powerOfMusicSection(el) {
    animateTextMayus(el);

    ScrollTrigger.create({
      trigger: el,
      start: "bottom 85%",
      onEnter: () => toggleDarkMode(),
      onLeaveBack: () => toggleLightMode(),
    });
  }

  function galleryHomeSection(el) {
    const items = el.querySelectorAll(".text-ani");
    const h3 = el.querySelector("h3");

    items.forEach((item) => {
      gsap.from(item, {
        duration: 0.8,
        y: "60%",
        autoAlpha: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "bottom 20%",
        },
      });
    });

    gsap.to(h3, {
      autoAlpha: 0,
      scrollTrigger: {
        trigger: el,
        start: "95% 100%",
        end: "bottom 70%",
        scrub: true,
      },
    });
  }

  function preFooterSection(el) {
    const trigger = el.querySelector("div");

    const scrollTriggerConfig = {
      trigger: trigger,
      start: "-40% bottom",
      end: "bottom top",
      scrub: true,
    };

    const desktopAnimations = [
      { target: ".img-ani-1", from: { y: "-54%" }, to: { y: "-1%" } },
      { target: ".img-ani-2", from: { y: "-135%" }, to: { y: "-185%" } },
      { target: ".img-ani-3", from: { y: "-20%" }, to: { y: "-6%" } },
      { target: ".img-ani-4", from: { y: "-100%" }, to: { y: "-140%" } },
      { target: ".img-ani-5", from: { y: "-25%" }, to: { y: "-3%" } },
    ];

    const mobileAnimations = [
      { target: ".img-ani-1", from: { y: "-30%" }, to: { y: "0%" } },
      { target: ".img-ani-2", from: { y: "-140%" }, to: { y: "-160%" } },
      { target: ".img-ani-3", from: { y: "-20%" }, to: { y: "-0%" } },
      { target: ".img-ani-5", from: { y: "-125%" }, to: { y: "-155%" } },
    ];

    const animations = isMobile ? mobileAnimations : desktopAnimations;

    animations.forEach(({ target, from, to }) => {
      gsap.fromTo(target, from, {
        ...to,
        scrollTrigger: scrollTriggerConfig,
      });
    });
  }

  function footerSection(el) {
    const tl = gsap.timeline({ paused: true });

    const words = el.querySelectorAll(".word");
    const blockLinks = el.querySelectorAll(".block-links");

    ScrollTrigger.create({
      trigger: el,
      start: "top 65%",
      onEnter: () => toggleLightMode(),
      onLeaveBack: () => toggleDarkMode(),
    });

    tl.from(words, {
      duration: 0.8,
      autoAlpha: 0,
      x: 0,
      y: "2rem",
      stagger: 0.15,
      ease: "power3.out",
    });

    tl.from(
      blockLinks,
      {
        duration: 1,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.6"
    );

    ScrollTrigger.create({
      trigger: el,
      start: "top 40%",
      end: "bottom top",
      animation: tl,
    });
  }

  function experienceFeaturesSection(el){

    new SplitType(".line-splide", { types: "lines", tagName: "span" });

    const triggerItem = el.querySelectorAll('.trigger-ani')

    triggerItem.forEach((item) => {

      const lines = item.querySelectorAll(".line-splide .line");

      gsap.from(lines, {
        duration: 0.8,
        y: "1.2rem",
        autoAlpha: 0,
        ease: "power3.out",
        stagger: '0.2',
        scrollTrigger: {
          trigger: item,
          start: "top 75%",
          end: "bottom 20%",
        },
      });
    });
  }

  // Llamamos a getSections en cada sección del documento
  document.querySelectorAll("[data-section]").forEach((section) => {
    getSections(section);
  });
});

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
// Smooth scrolling with Lenis

const lenis = new Lenis();

lenis.on('scroll', (e) => {
  
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

gsap.utils.toArray(".sectionText").forEach((item) => {
  const pinSection = () => {
    if (window.innerWidth > 600) {
      ScrollTrigger.create({
        trigger: item,
        start: "center center",
        pin: true,
        pinSpacing: false,
      });
    } else {
      // No pinning for smaller screens
    }
  };

  pinSection(); // Initial check

  // Re-check on resize
  window.addEventListener('resize', pinSection);
});

// Animate bento box items
gsap.utils.toArray(".bento-box-item").forEach((item) => {
  gsap.fromTo(item,
    { opacity: 0, x: 500, rotation: 0, scale: 0, backgroundColor: "#586D92" },
    {
      opacity: 1, x: 0, duration: 1, rotation: 360, scale: 1, backgroundColor: "#EFEFE5",
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        end: "bottom 90%",
        scrub: 1,
      }
    }
  );
});
/*
TODO: Create a horizontal Scroll.
gsap.to(container, {
  x: () => {
    const maxTranslate = -((container.scrollWidth/1.9) - document.documentElement.clientWidth);
    console.log("Max translate value:", maxTranslate);
    console.log("Container scroll width:", container.scrollWidth);
console.log("Client width:", document.documentElement.clientWidth);
console.log("Calculated translate value:", -(container.scrollWidth - document.documentElement.clientWidth));

    return maxTranslate + "px";
  },
  ease: "none",
  scrollTrigger: {
    trigger: container,
    start: "top top", // Where the animation should start
    end: () => "+=" + (container.scrollWidth - document.documentElement.clientWidth),
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers:true
  }
});
*/
ScrollTrigger.refresh();
gsap.registerPlugin(ScrollTrigger);
    gsap.to('progress', {
        value: 100,
        ease: 'none',
        scrollTrigger: { scrub: 0.3 }
    });
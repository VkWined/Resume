gsap.registerPlugin(ScrollTrigger);

let sections =gsap.utils.toArray(".panel");
sections.forEach((section) => {
  ScrollTrigger.create({
    trigger: section,
    start: "center 30%",
    pin: true,
    pinSpacing: false,
    markers: {startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20}
  })
});


let bentoBoxes = gsap.utils.toArray(".bento-box-item");
bentoBoxes.forEach((box) => {
  gsap.fromTo(box,
    { opacity: 0, x: 500, rotation: 0, scale: 0, backgroundColor: "#586D92" },
    {
      opacity: 1, x: 0, duration: 1, rotation: 360, scale: 1, backgroundColor: "#EFEFE5",
      scrollTrigger: {
        trigger: box,
        start: "top 90%",
        end: "bottom 90%",
        scrub: 1,
      }
    }
  );
});


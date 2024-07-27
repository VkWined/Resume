gsap.registerPlugin(ScrollTrigger);

let sections =gsap.utils.toArray(".panel");
sections.forEach((section) => {
  ScrollTrigger.create({
    trigger: section,
    start: "center 30%",
    pin: true,
    pinSpacing: false,
  })
});

//TODO: Remove panel class from projects and give them a new layout to prevent them from using more than 100 vh
//      Also add the horizontal scroll effect

//TODO: Add more effects to the Website, Some kind of parallax. Soft skills and Technologies must have some kind of effect each,
//      It would be nice to present them in a different way, Maybe like a roulette, carousel or a cool effect like that.

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


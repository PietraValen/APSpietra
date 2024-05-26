const bars = document.querySelector(".bar"),
  close = document.querySelector(".close"),
  menu = document.querySelector(".menu");

bars.addEventListener("click", () => {
  menu.classList.add("active");
  gsap.from(".menu", {
    opacity: 0,
    duration: 0.3,
  });

  gsap.from(".menu ul", {
    opacity: 0,
    x: -300,
  });
});

close.addEventListener("click", () => {
  menu.classList.remove("active");
});

function animateContent(selector) {
  selector.forEach((selector) => {
    gsap.to(selector, {
      y: 30,
      duration: 0.1,
      opacity: 1,
      delay: 0.2,
      stagger: 0.2,
      ease: "power2.out",
    });
  });
}

function scrollTirggerAnimation(triggerSelector, boxSelectors) {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: triggerSelector,
      start: "top 50%",
      end: "top 80%",
      scrub: 1,
    },
  });

  boxSelectors.forEach((boxSelector) => {
    timeline.to(boxSelector, {
      y: 0,
      duration: 1,
      opacity: 1,
    });
  });
}

function swipeAnimation(triggerSelector, boxSelectors) {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: triggerSelector,
      start: "top 50%",
      end: "top 100%",
      scrub: 3,
    },
  });

  boxSelectors.forEach((boxSelector) => {
    timeline.to(boxSelector, {
      x: 0,
      duration: 1,
      opacity: 1,
    });
  });
}

function galleryAnimation(triggerSelector, boxSelectors) {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: triggerSelector,
      start: "top 100%",
      end: "bottom 100%",
      scrub: 1,
    },
  });

  boxSelectors.forEach((boxSelector) => {
    timeline.to(boxSelector, {
      y: 0,
      opacity: 1,
      duration: 1,
    });
  });
}

animateContent([
  ".home .content h5, .home .content h1, .home .content p, .home .content .search",
]);

scrollTirggerAnimation(".esg", [".esg .box1", ".esg .box2", ".esg .box3"]);

scrollTirggerAnimation(".feedback .container", [
  ".feedback .label",
  ".feedback .heading",
  ".feedback .paragraph",
]);

scrollTirggerAnimation(".article", [".article .label", ".article .heading"]);

swipeAnimation(".consultancy", [
  ".consultancy .heading",
  ".consultancy .content",
]);

swipeAnimation(".article", [
  ".article .latest-article",
  ".article .box1",
  ".article .box2",
  ".article .box3",
  ".article .box4",
]);

galleryAnimation(".consultancy .gallery", [
  ".consultancy .gallery .box1",
  ".consultancy .gallery .box2",
]);

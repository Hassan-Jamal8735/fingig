let upDown_Scroll = document.querySelector(".upDownScrol");
if (upDown_Scroll) {
  gsap.set(".upDownScrol", {
    yPercent: 80,
  });

  gsap.to(".upDownScrol", {
    yPercent: -80,
    ease: "none",
    scrollTrigger: {
      trigger: ".upDownScrol",
      end: "bottom center",
      scrub: 1,
    },
  });
}

let upDown_Slow = document.querySelector(".upDownScrolSlow");
if (upDown_Slow) {
  gsap.set(".upDownScrolSlow", {
    yPercent: 50,
  });

  gsap.to(".upDownScrolSlow", {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
      trigger: ".upDownScrolSlow",
      end: "bottom center",
      scrub: 1,
    },
  });
}

// Images parallax
var width = $(window).width();
if (width > 1023) {
  let imageParallax = document.querySelector(".img-container");
  if (imageParallax) {
    gsap.utils.toArray(".img-container").forEach((container) => {
      const img = container.querySelector("img");

      const t4 = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          scrub: true,
          pin: false,
        },
      });

      t4.fromTo(
        img,
        {
          yPercent: -60,
          ease: "none",
        },
        {
          yPercent: 60,
          ease: "none",
        }
      );
    });
  }
}

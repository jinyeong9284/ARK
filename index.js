// info
if (innerWidth > 780) {
  gsap.set(".text-container .text-wrapper1", {
    width: 5,
    backgroundColor: "#e1f41d",
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".text-container .text-wrapper1",
        scrub: 1,
        start: "-=300",
        end: "bottom bottom",
      },
    })
    .to(".text-container .text-wrapper1", {
      width: "30vw",
      duration: 1,
      ease: "none",
      stagger: 5,
      backgroundColor: "#000",
    });

  gsap.set(".text-container .text-wrapper2", {
    width: 5,
    backgroundColor: "#e1f41d",
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".text-container .text-wrapper2",
        scrub: 1,
        start: "-=400",
        end: "bottom bottom",
      },
    })
    .to(".text-container .text-wrapper2", {
      width: "39vw",
      duration: 1,
      ease: "none",
      stagger: 5,
      backgroundColor: "#000",
    });
  gsap.set(".text-container .text-wrapper3", {
    width: 5,
    backgroundColor: "#e1f41d",
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".text-container .text-wrapper3",
        scrub: 1,
        start: "-=500",
        end: "bottom bottom",
      },
    })
    .to(".text-container .text-wrapper3", {
      width: "25vw",
      duration: 1,
      ease: "none",
      stagger: 5,
      backgroundColor: "#000",
    });
  gsap.set(".text-container .text-wrapper4", {
    width: 5,
    backgroundColor: "#e1f41d",
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".text-container .text-wrapper4",
        scrub: 1,
        start: "-=500",
        end: "bottom bottom",
      },
    })
    .to(".text-container .text-wrapper4", {
      width: "34vw",
      duration: 1,
      ease: "none",
      stagger: 5,
      backgroundColor: "#000",
    });
  gsap.set(".text-container .text-wrapper5", {
    width: 5,
    backgroundColor: "#e1f41d",
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".text-container .text-wrapper5",
        scrub: 1,
        start: "-=600",
        end: "bottom bottom",
      },
    })
    .to(".text-container .text-wrapper5", {
      width: "35vw",
      duration: 1,
      ease: "none",
      stagger: 5,
      backgroundColor: "#000",
    });
  gsap.set(".text-container .text-wrapper6", {
    width: 5,
    backgroundColor: "#e1f41d",
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".text-container .text-wrapper6",
        scrub: 1,
        start: "-=700",
        end: "bottom bottom",
      },
    })
    .to(".text-container .text-wrapper6", {
      width: "27vw",
      duration: 1,
      ease: "none",
      stagger: 5,
      backgroundColor: "#000",
    });
}
// dino-img
let image = document.getElementById("image");
let images = [
  "./assets/images/crab.png",
  "./assets/images/sarko.png",
  "./assets/images/shark.png",
  "./assets/images/tech.png",
  "./assets/images/turtle.png",
  "./assets/images/ark4.png",
];
let intervalId = setInterval(function () {
  let random = Math.floor(Math.random() * images.length);
  image.src = images[random];
}, 200);

// Pause interval on image hover
image.addEventListener("mouseenter", function () {
  clearInterval(intervalId); // Clear the interval when hovering
});

// Resume interval when mouse leaves the image
image.addEventListener("mouseleave", function () {
  // Restart the interval (if needed)
  intervalId = setInterval(function () {
    let random = Math.floor(Math.random() * images.length);
    image.src = images[random];
  }, 200);
});

gsap.set(".info-dino-wrapper p:first-of-type", {
  width: 0,
  backgroundColor: "#e1f41d",
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".info-dino-wrapper",
      scrub: 1,
      start: "-=100",
      end: "bottom bottom",
    },
  })
  .to(".info-dino-wrapper p:first-of-type", {
    width: "20vw",
    duration: 0.6,
    ease: "none",
    stagger: 2,
  });
// count number
let nums = document.querySelectorAll(".bundle-wrapper #count");
let section = document.querySelector(".bundle-wrapper");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 1000 / goal);
}
if (innerWidth > 1300) {
  gsap.set(
    ".bundle-wrapper .budle-container .budle-contents .bundle-contents2",
    {
      width: "50%",
    }
  );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".bundle-wrapper",
        scrub: 1,
        start: "-=500",
        end: "center bottom",
      },
    })
    .to(".bundle-wrapper .budle-container .budle-contents .bundle-contents2", {
      width: "auto",
      duration: 0.2,
      ease: "none",
      transition: 0.2,
    });
}
// pick type
$(".pick-wrapper .pick-dino .button1").on("click", (e) => {
  $(".pick-wrapper .pick-dino .button1").toggleClass("toggle-btn");
  $(".pick-wrapper .pick-dino .dino1 .learn").toggleClass("toggle-btn");
  $(".pick-wrapper .pick-dino .dino1").toggleClass("toggle-btn");
  $(".pick-wrapper .type-text").toggleClass("toggle-btn");
  $(".pick-wrapper .pick-dino .theri-text").toggleClass("toggle-btn");
  $(".pick-wrapper .pick-dino .button2").toggleClass("ad-btn");
  $(".pick-wrapper .pick-dino .dino2 .learn").toggleClass("ad-btn");
});
$(".pick-wrapper .pick-dino .button2").on("click", (e) => {
  $(".pick-wrapper .pick-dino .button2").toggleClass("toggle-btn");
  $(".pick-wrapper .pick-dino .dino2 .learn").toggleClass("toggle-btn");
  $(".pick-wrapper .pick-dino .dino2").toggleClass("toggle-btn");
  $(".pick-wrapper .type-text").toggleClass("toggle-btn");
  $(".pick-wrapper .pick-dino .doye-text").toggleClass("toggle-btn");
  $(".pick-wrapper .pick-dino .button1").toggleClass("ad-btn");
  $(".pick-wrapper .pick-dino .dino1 .learn").toggleClass("ad-btn");
});

gsap.set(".pick-wrapper .pick-dino .dino1 img", {
  marginLeft: -1000,
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".pick-wrapper .pick-dino",
      scrub: 1,
      start: "-=500",
      end: "center bottom",
    },
  })
  .to(".pick-wrapper .pick-dino .dino1 img", {
    marginLeft: 0,
    duration: 1,
    ease: "none",
    stagger: 1,
    transition: 0.3,
  });

gsap.set(".pick-wrapper .type-text", {
  top: "120%",
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".pick-wrapper .pick-dino",
      scrub: 1,
      start: "-=500",
      end: "center bottom",
    },
  })
  .to(".pick-wrapper .type-text", {
    top: "50%",
    duration: 1,
    ease: "none",
    stagger: 1,
    transition: 0.1,
  });

gsap.set(".pick-wrapper .pick-dino .pte", {
  left: "100%",
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".pick-wrapper .pick-dino",
      scrub: 1,
      start: "-=500",
      end: "center bottom",
    },
  })
  .to(".pick-wrapper .pick-dino .pte", {
    left: "50%",
    duration: 1,
    ease: "none",
    stagger: 1,
    transition: 0.3,
  });

// weapon wrapper
$(function () {
  let current = 0;
  const $slideItems = $(".weapon-kok-contents");

  const simpleSlide = (idx) => {
    if (idx >= $slideItems.length) {
      // 다음 버튼 클릭시 section의 수 보다 커지면 인덱스 0으로
      idx = 0;
    } else if (idx < 0) {
      // 이전 버튼 클릭시 0보다 작아지면 인덱스가 section의 수보다 적은 값으로(== 인덱스)
      idx = $slideItems.length - 1;
    }
    current = idx;
    $slideItems.removeClass("active").eq(current).addClass("active");
  };

  // 다음 버튼
  $(".button .next-button").on("click", () => {
    simpleSlide(current - 1);
  });

  // 이전 버튼
  $(".button .prev-button").on("click", () => {
    simpleSlide(current + 1);
  });
});

$(function () {
  let current = 0;
  const $slideItems = $(".weapon-kok-img");

  const simpleSlide = (idx) => {
    if (idx >= $slideItems.length) {
      // 다음 버튼 클릭시 section의 수 보다 커지면 인덱스 0으로
      idx = 0;
    } else if (idx < 0) {
      // 이전 버튼 클릭시 0보다 작아지면 인덱스가 section의 수보다 적은 값으로(== 인덱스)
      idx = $slideItems.length - 1;
    }
    current = idx;
    $slideItems.removeClass("active").eq(current).addClass("active");
  };

  // 이전 버튼
  $(".button .next-button").on("click", () => {
    simpleSlide(current - 1);
    $(".weapon-kok-img").removeClass("prev").eq(current).addClass("prev");
  });

  // 다음 버튼
  $(".button .prev-button").on("click", () => {
    simpleSlide(current + 1);
    $(".weapon-kok-img").removeClass("next").eq(current).addClass("next");
  });
});

gsap.set(".stone-trans", {
  marginLeft: -1000,
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".weapon-item",
      scrub: 1,
      start: "-=500",
      end: "cetner bottom",
    },
  })
  .to(".stone-trans", {
    marginLeft: 0,
    duration: 1,
    ease: "none",
    stagger: 1,
    transition: 0.3,
  });

// boss horizontal
let scrollContainer = document.querySelector(".boss-wrapper .boss-container");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

// Function to smoothly scroll left by a certain amount
function smoothScrollLeft(container, amount) {
  const start = container.scrollLeft;
  const target = start - amount;
  const startTime = performance.now();
  const duration = 500; // Duration of the scroll animation in milliseconds

  function step(timestamp) {
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    container.scrollLeft = start + (target - start) * progress;

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

// Event listeners for nextBtn and backBtn
nextBtn.addEventListener("click", () => {
  smoothScrollLeft(scrollContainer, 500);
});

backBtn.addEventListener("click", () => {
  smoothScrollLeft(scrollContainer, -500);
});

// mobile-menu
$(".header-mobile").on("click", (e) => {
  $(".header-mobile-menu").toggleClass("click");
  $("header ul").toggleClass("click");
  $("header").toggleClass("click");
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navList = document.getElementById("navList");
  const navItems = navList.querySelectorAll("li");

  // Calculate the position of each section
  const sectionPositions = Array.from(sections).map((section) => {
    return {
      id: section.id,
      offsetTop: section.offsetTop,
      offsetBottom: section.offsetTop + section.offsetHeight,
    };
  });

  // Function to update active navigation item based on scroll position
  function updateActiveNavItem() {
    const scrollPosition = window.scrollY;

    // Find the section that is currently in view
    const currentSection = sectionPositions.find((section) => {
      return (
        scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetBottom
      );
    });

    // Remove active class from all nav items
    navItems.forEach((item) => {
      item.classList.remove("active");
    });

    // Add active class to the corresponding nav item
    if (currentSection) {
      const correspondingNavItem = navList.querySelector(
        `[href="#${currentSection.id}"]`
      ).parentNode;
      if (correspondingNavItem) {
        correspondingNavItem.classList.add("active");
      }
    }
  }

  // Update active nav item on scroll
  window.addEventListener("scroll", updateActiveNavItem);
});

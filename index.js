// info
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
    width: 540,
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
    width: 620,
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
    width: 470,
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
    width: 615,
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
    width: 670,
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
    width: 490,
    duration: 1,
    ease: "none",
    stagger: 5,
    backgroundColor: "#000",
  });

// dino
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

// number counting
//scroll counting start
window.addEventListener("scroll", scrollE);

function scrollE() {
  var counting_wrap = document.querySelector(".bundle-wrapper");
  var currentScroll = window.scrollY;
  var countingOffset = counting_wrap.offsetTop;
  var viewportHeight = window.innerHeight;

  if (currentScroll >= countingOffset + viewportHeight / 200) {
    counting(0, 23, count);
  }
}

//리팩토링
function counting(num, counter, el) {
  //선택자
  var section04 = document.querySelector("#count");

  //매개변수
  var up = num;
  var count = counter;

  setInterval(function () {
    //1) 0.01초에 한번씩 반복되는 함수인데
    if (up < count) {
      //2) up < count 충족할 때 까지 실행
      up++; // > 한번 실행할 때마다 up이 1씩 올라감
      el.textContent = up; // > el이라는 매개변수 선택자에 현재 up을 넣음
    } // 한번 끝나면 0.01초 후에 또 실행
  }, 10);
}

// pick type
$(".pick-wrapper .pick-dino .button1").on("click", (e) => {
  $(".pick-wrapper .pick-dino .button1").toggleClass("toggle-btn");
  $(".pick-wrapper .pick-dino .dino1 .learn").toggleClass("toggle-btn");
  $(".pick-wrapper .pick-dino .dino1").toggleClass("toggle-btn");
  $(".pick-wrapper .type-text").toggleClass("toggle-btn");
  $(".pick-wrapper .pick-dino .theri-text").toggleClass("toggle-btn");
});
$(".pick-wrapper .pick-dino .button2").on("click", (e) => {
  $(".pick-wrapper .pick-dino .button2").toggleClass("toggle-btn");
  $(".pick-wrapper .pick-dino .dino2 .learn").toggleClass("toggle-btn");
  $(".pick-wrapper .pick-dino .dino2").toggleClass("toggle-btn");
  $(".pick-wrapper .type-text").toggleClass("toggle-btn");
  $(".pick-wrapper .pick-dino .doye-text").toggleClass("toggle-btn");
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

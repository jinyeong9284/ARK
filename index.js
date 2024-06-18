// dino

let image = document.getElementById("image");
let images = [
  "./assets/images/ark2.png",
  "./assets/images/ark3.png",
  "./assets/images/ark4.png",
  "./assets/images/ark5.png",
  "./assets/images/ark6.png",
  "./assets/images/ark7.png",
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

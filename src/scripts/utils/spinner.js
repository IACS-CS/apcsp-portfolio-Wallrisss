
// Call this function after your spinner HTML is in the DOM
export function startSpinner() {
  // Animate the spinner wrapper left and right in a loop
  const spinTween = gsap.to(".wrapper", {
    x: -800, // Adjust for your layout
    duration: 3,
    ease: "power1.inOut",
    repeat: -1 // infinite loop
  });

  // Stop spinner on button click
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".stop-btn").addEventListener("click", function() {
      spinTween.pause();
      // Add logic here to select the center project
    });
  });
}

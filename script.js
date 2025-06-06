// Welcome message in console
console.log("Welcome to Avanthika's Portfolio!");

// 1. Highlight active section in navbar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// 2. Typing effect for Home section (optional)
let typeIndex = 0;
const text = "Creative Web Developer & AI/ML Enthusiast";
const target = document.querySelector(".home-left h2");

function typeEffect() {
  if (typeIndex < text.length) {
    target.textContent += text.charAt(typeIndex);
    typeIndex++;
    setTimeout(typeEffect, 60);
  }
}
target.textContent = "";
typeEffect();

// 3. Alert on Resume Download
const downloadBtn = document.querySelector(".download-btn");
downloadBtn.addEventListener("click", () => {
  alert("Downloading resume...");
});

// 4. Optional: Scroll-to-top button
// Create button
const scrollTopBtn = document.createElement("button");
scrollTopBtn.textContent = "↑ Top";
scrollTopBtn.className = "scroll-top";
document.body.appendChild(scrollTopBtn);

// Show button when scrolling
window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

// Scroll to top on click
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

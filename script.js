// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select all gallery images
  const galleryImages = document.querySelectorAll(".gallery-img");

  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      // Find the papers div right after the image
      const papers = img.nextElementSibling;

      // Toggle visibility
      if (papers.classList.contains("hidden")) {
        papers.classList.remove("hidden");
        papers.setAttribute("aria-hidden", "false");
      } else {
        papers.classList.add("hidden");
        papers.setAttribute("aria-hidden", "true");
      }
    });
  });
});

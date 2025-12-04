document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".gallery-img").forEach(img => {
    img.addEventListener("click", () => {
      console.log("Image clicked:", img); // Debug
      const papers = img.parentElement.querySelector(".papers");
      if (!papers) {
        console.warn("No .papers div found for", img);
        return;
      }
      papers.classList.toggle("hidden");
      papers.setAttribute("aria-hidden", papers.classList.contains("hidden") ? "true" : "false");
    });
  });
});

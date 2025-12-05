document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".gallery-img").forEach(img => {
    img.addEventListener("click", () => {
      const papers = img.nextElementSibling;
      if (papers) {
        papers.classList.toggle("hidden");
        papers.setAttribute("aria-hidden", papers.classList.contains("hidden") ? "true" : "false");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Select all gallery items
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach(item => {
    const img = item.querySelector(".gallery-img");
    const papers = item.querySelector(".papers");

    if (!img || !papers) {
      console.warn("Missing .gallery-img or .papers in:", item);
      return;
    }

    img.addEventListener("click", () => {
      papers.classList.toggle("hidden");
      const isHidden = papers.classList.contains("hidden");
      papers.setAttribute("aria-hidden", isHidden ? "true" : "false");
    });
  });
});



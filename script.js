document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".gallery-item").forEach(item => {
    const img = item.querySelector(".gallery-img");
    const papers = item.querySelector(".papers");

    img.addEventListener("click", () => {
      if (!papers) {
        console.warn("No .papers div found for", img);
        return;
      }
      papers.classList.toggle("hidden");
      papers.setAttribute("aria-hidden", papers.classList.contains("hidden") ? "true" : "false");
    });
  });
});
}

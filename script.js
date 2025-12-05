// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Loop through each gallery item
  document.querySelectorAll(".gallery-item").forEach(item => {
    const img = item.querySelector(".gallery-img");   // clickable image
    const box = item.querySelector(".text-box");      // hidden text box

    if (img && box) {
      img.addEventListener("click", () => {
        // Toggle visibility
        box.classList.toggle("hidden");

        // Update accessibility attribute
        box.setAttribute(
          "aria-hidden",
          box.classList.contains("hidden") ? "true" : "false"
        );
      });
    }
  });
});

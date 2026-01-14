// Simple interactivity: highlight venture on click
document.addEventListener("DOMContentLoaded", () => {
  const ventures = document.querySelectorAll("ul li");
  ventures.forEach(item => {
    item.addEventListener("click", () => {
      alert(`You selected: ${item.textContent}`);
    });
  });
});


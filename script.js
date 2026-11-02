
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('nav a').forEach(item => {
      item.style.color = '#ccc';
    });
    this.style.color = '#b7ff4a';
  });
});

console.log("Neon Tech Portfolio Loaded Successfully!");

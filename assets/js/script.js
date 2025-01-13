window.addEventListener("scroll", () => {
  const scrollValue = window.scrollY; // Obtener la cantidad de scroll
  const blueIntensity = Math.min(255, scrollValue); // Limitar el máximo
  document.body.style.backgroundColor = `rgb(0, ${50 + blueIntensity / 10}, ${blueIntensity})`;
});


document.addEventListener("DOMContentLoaded", () => {
  // Config Dynamic Data Injection
  document.getElementById("heroTitle").innerText = CONFIG.heroTitle;
  document.getElementById("heroHighlight").innerText = CONFIG.heroHighlight;
  document.getElementById("heroText").innerText = CONFIG.heroText;
  document.getElementById("aboutTitle").innerText = CONFIG.aboutTitle;
  document.getElementById("aboutText1").innerText = CONFIG.aboutText1;
  document.getElementById("aboutText2").innerText = CONFIG.aboutText2;

  // Contact Links
  document.getElementById("callLink").href = `tel:${CONFIG.phone}`;
  document.getElementById("waLink").href = `https://wa.me/${CONFIG.whatsapp.replace(/[^0-9]/g, '')}`;
  document.getElementById("fbLink").href = CONFIG.facebook;

  // Load Products Grid
  const grid = document.getElementById("productsGrid");
  CONFIG.products.forEach(p => {
    const card = document.createElement("div");
    card.className = "card reveal";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.title}">
      <div class="card-content">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      </div>
    `;
    grid.appendChild(card);
  });

  // Add 3D Reveal Class to Sections
  document.querySelectorAll("section, article, .mini div").forEach(el => {
    el.classList.add("reveal");
  });

  // 3D Scroll Reveal Logic
  const revealOnScroll = () => {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Initial Check
});

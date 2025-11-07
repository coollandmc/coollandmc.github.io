document.addEventListener("DOMContentLoaded", () => {
  const srButton = document.getElementById("lang-sr");
  const enButton = document.getElementById("lang-en");

  // Load saved language or default to English
  const savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);

  srButton.addEventListener("click", () => setLanguage("sr"));
  enButton.addEventListener("click", () => setLanguage("en"));
});

function setLanguage(lang) {
  localStorage.setItem("lang", lang);

  // Toggle active buttons
  document.getElementById("lang-sr").classList.toggle("active", lang === "sr");
  document.getElementById("lang-en").classList.toggle("active", lang === "en");

  // Update all translatable elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Also translate the browser tab title
  document.title = translations[lang].title;
}

// All your translations
const translations = {
  en: {
    Coolland: "Coolland",
    CoollandEvents: "Coolland Events",
    CoollandSMP: "Coolland SMP",
    news: "News",
  },
  sr: {
    Coolland: "Кулленд",
    CoollandEvents: "Кулленд Догађаји",
    CoollandSMP: "Кулленд СМП",
    news: "Вести",
  }
};
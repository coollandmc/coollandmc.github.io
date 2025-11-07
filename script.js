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
}

// All your translations
const translations = {
  en: {
    Coolland: "Coolland",
    CoollandEvents: "Coolland Events",
    CoollandSMP: "Coolland SMP",
    news: "News",
    announce: "Coolland Events 2 announced!",
    descriptione:"After a year without an event, Coolland Events is finally back with a new host and completely reworked mini-games and 3 custom plugins.",
    season12:"Coolland Season 12 has begun!",
    description1s:"New season without any major changes to vanilla gameplay.",
  },
  sr: {
    Coolland: "Coolland",
    CoollandEvents: "Coolland Events",
    CoollandSMP: "Coolland SMP",
    news: "Vesti",
    announce: "Coolland Events 2 je najavljen!",
    descriptione:"Nakon godinu dana bez eventa, napokon se Coolland Events vraća sa novim hostom i sa skroz reworkovanim mini-igrama i sa 3 custom plugina.",
    season12:"Coolland Sezona 12 je počela!",
    description1s:"Nova sezona sa minimalnim pluginima.",
  }
};
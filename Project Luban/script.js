// Set Luban's number in international format without +, spaces, or punctuation.
// Example format for Nigeria: 23480XXXXXXXX. Until set, WhatsApp opens the contact chooser.
const WHATSAPP_NUMBER = "2348096508483";
function buildWhatsAppUrl(message) {
  const phone = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
const defaultMessage = "Hello Luban Electrical Services, I'm interested in a solar consultation. Please advise me on solar for my property.";
document.querySelectorAll(".whatsapp-link").forEach((link) => {
  link.href = buildWhatsAppUrl(defaultMessage);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});
document.querySelector("#lead-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const fields = new FormData(event.currentTarget);
  const message = [
    "Hello Luban Electrical Services, I'd like a solar consultation.",
    `Name: ${fields.get("name")}`,
    `Property type: ${fields.get("property")}`,
    `Location: ${fields.get("location")}`,
    `What I'd like to power: ${fields.get("needs")}`
  ].join("\n");
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
});
document.querySelector("#year").textContent = new Date().getFullYear();
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));


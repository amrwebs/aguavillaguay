// Configurá tu número:
const WHATSAPP_NUMBER = "5493446000000"; // sin + ni espacios
const TEL_DISPLAY = "+54 3446 000000";

document.addEventListener("DOMContentLoaded", () => {
  const waURL = `https://wa.me/${WHATSAPP_NUMBER}`;
  const telE164 = `+${WHATSAPP_NUMBER}`;

  // Tel principal en “Datos”
  const telLink = document.getElementById("tel-link");
  if (telLink) {
    telLink.textContent = TEL_DISPLAY;
    telLink.href = waURL; // también abre WhatsApp
  }

  // Pedir ahora
  const ctaWa = document.getElementById("cta-wa");
  const ctaTel = document.getElementById("cta-tel");
  if (ctaWa) ctaWa.href = waURL;
  if (ctaTel) {
    ctaTel.textContent = TEL_DISPLAY;
    ctaTel.href = `tel:${telE164}`;
  }

  // CTA también en Contacto
  const contactWa = document.getElementById("contact-wa");
  const contactTel = document.getElementById("contact-tel");
  if (contactWa) contactWa.href = waURL;
  if (contactTel) {
    contactTel.textContent = TEL_DISPLAY;
    contactTel.href = `tel:${telE164}`;
  }

  // Toggle menú mobile
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-header nav");
  toggle?.addEventListener("click", () => nav.classList.toggle("open"));
});

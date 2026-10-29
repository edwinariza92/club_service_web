export const APP_URL = (
  process.env.NEXT_PUBLIC_APP_URL?.trim() || "https://clubservice.netlify.app"
).replace(/\/+$/, "");

export const APP_LOGIN_URL = `${APP_URL}/login`;

export const WHATSAPP_NUMERO = "573044525315";
export const EMAIL_CONTACTO = "edwinariza17@gmail.com";

export const WHATSAPP_DEMO = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
  "Hola, quiero solicitar una demo de la plataforma de reservas de Club Service."
)}`;

export const WHATSAPP_PROYECTO = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
  "Hola, quisiera solicitar una propuesta para la operación de mi Club House."
)}`;

export const EMAIL_DEMO = `mailto:${EMAIL_CONTACTO}?subject=${encodeURIComponent(
  "Solicitud de demo - Club Service"
)}`;

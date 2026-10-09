export const navItems = [
  { href: "#services", label: "Услуги" },
  { href: "#treatment", label: "Лечение" },
  { href: "#doctors", label: "Врачи" },
  { href: "#stories", label: "Отзывы" },
  { href: "#faq", label: "Вопросы" },
] as const;

export const phone = {
  href: "tel:+78125552424",
  label: "+7 (812) 555-24-24",
} as const;

export const bookingHref = "#booking";

/** Anchors for sections that will be added in later stages. */
export const pendingAnchors = [
  "prices",
  "results",
  "about",
  "contacts",
] as const;

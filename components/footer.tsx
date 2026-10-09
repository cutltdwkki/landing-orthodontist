import { PrimaryButton } from "@/components/button-link";
import { bookingHref, phone } from "@/lib/site";

const footerNav = [
  { href: "#services", label: "Услуги" },
  { href: "#treatment", label: "Лечение" },
  { href: "#doctors", label: "Врачи" },
  { href: "#stories", label: "Отзывы" },
  { href: "#faq", label: "Вопросы" },
] as const;

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <p className="footer-logo">NOVA ORTHO</p>
            <p className="footer-tagline">Ортодонтия для взрослых и детей · Санкт-Петербург</p>
            <p className="footer-copy">
              Помогаем обрести здоровую улыбку с индивидуальным планом лечения и внимательным
              отношением на каждом этапе.
            </p>
          </div>

          <nav aria-label="Навигация в подвале">
            <h2 className="footer-heading">Навигация</h2>
            <ul className="footer-links">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-contacts">
            <h2 className="footer-heading">Контакты</h2>
            <a className="footer-phone" href={phone.href}>
              {phone.label}
            </a>
            <p className="footer-city">Санкт-Петербург</p>
            <div className="footer-cta">
              <PrimaryButton href={bookingHref}>Записаться на консультацию</PrimaryButton>
            </div>
          </div>
        </div>

        <div className="footer-bar">
          <p>© NOVA ORTHO, 2026</p>
          {/* Временная заглушка: замените href на адрес страницы политики, когда она появится. */}
          <a href="#privacy">Политика обработки персональных данных</a>
        </div>
      </div>
    </footer>
  );
}

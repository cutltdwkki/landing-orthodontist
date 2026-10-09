"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import Image from "next/image";
import { ArrowIcon } from "@/components/icons";
import { Section } from "@/components/section";

const phonePattern = /^\+7 \(\d{3}\) \d{3} \d{2}-\d{2}$/;

function formatPhone(raw: string) {
  let digits = raw.replace(/\D/g, "");
  if (digits.startsWith("8")) digits = `7${digits.slice(1)}`;
  if (digits.startsWith("7")) digits = digits.slice(1);
  digits = digits.slice(0, 10);
  if (!digits) return "";

  let formatted = `+7 (${digits.slice(0, 3)}`;
  if (digits.length >= 3) formatted += ")";
  if (digits.length > 3) formatted += ` ${digits.slice(3, 6)}`;
  if (digits.length > 6) formatted += ` ${digits.slice(6, 8)}`;
  if (digits.length > 8) formatted += `-${digits.slice(8, 10)}`;
  return formatted;
}

export function Booking() {
  const [phone, setPhone] = useState("");

  function handlePhoneChange(event: ChangeEvent<HTMLInputElement>) {
    const next = formatPhone(event.target.value);
    event.target.setCustomValidity("");
    setPhone(next);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phoneValue = String(data.get("phone") ?? "");
    const comment = String(data.get("comment") ?? "");
    const nameInput = form.elements.namedItem("name");
    const phoneInput = form.elements.namedItem("phone");

    if (nameInput instanceof HTMLInputElement) {
      nameInput.setCustomValidity(name ? "" : "Введите имя");
    }
    if (phoneInput instanceof HTMLInputElement) {
      phoneInput.setCustomValidity(
        phonePattern.test(phoneValue) ? "" : "Введите номер в формате +7 (999) 123 45-67",
      );
    }

    if (!form.reportValidity()) return;

    // Отправка не подключена: форму нельзя считать успешно отправленной.
    // Когда появится backend или CRM, передайте сюда name, phone и необязательный comment.
    void comment;
  }

  return (
    <Section id="booking" titleId="booking-title" className="section-booking scroll-mt-24">
      <div className="booking-layout">
        <div className="card booking-panel">
          <h2 id="booking-title" className="heading-lg">
            Хотите узнать, какой вариант лечения подойдёт вам?
          </h2>
          <p className="booking-lead">
            Запишитесь на консультацию ортодонта. На первой встрече разберём вашу ситуацию и
            расскажем о возможных вариантах лечения.
          </p>
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="booking-identity">
              <div className="booking-field">
                <label className="booking-label" htmlFor="booking-name">
                  Ваше имя
                  <span className="booking-required" aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  id="booking-name"
                  className="booking-input"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                />
              </div>
              <div className="booking-field">
                <label className="booking-label" htmlFor="booking-phone">
                  Номер телефона
                  <span className="booking-required" aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  id="booking-phone"
                  className="booking-input"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+7 (___) ___ __-__"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                />
              </div>
            </div>
            <div className="booking-comment">
              <label htmlFor="booking-comment">Опишите вашу проблему</label>
              <textarea id="booking-comment" name="comment" rows={2} />
            </div>
            <div className="booking-actions">
              <button type="submit" className="booking-submit">
                Записаться на консультацию
                <ArrowIcon className="size-[18px]" />
              </button>
              <p className="label mt-3">
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
              </p>
            </div>
          </form>
        </div>
        <div className="booking-photos">
          <div className="booking-photo">
            <Image
              src="/images/команда.jpg"
              alt="Команда клиники NOVA ORTHO в кабинете"
              fill
              sizes="(min-width: 64rem) 760px, (min-width: 48rem) 50vw, 100vw"
              className="object-cover object-[center_48%]"
            />
          </div>
          <div className="booking-photo-small">
            <Image
              src="/images/команда 2.jpg"
              alt="Врачи клиники NOVA ORTHO"
              fill
              sizes="(min-width: 64rem) 240px, 46vw"
              className="object-cover object-[center_22%]"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

import type { CSSProperties } from "react";
import Image from "next/image";
import { AccentWave } from "@/components/accent-wave";
import { PrimaryButton } from "@/components/button-link";
import { Card } from "@/components/card";
import { Section } from "@/components/section";
import { bookingHref } from "@/lib/site";

const methods = [
  {
    title: "Брекеты",
    icon: "/images/брекеты.svg",
    lead: "Несъёмные ортодонтические конструкции для выравнивания зубов и исправления прикуса.",
    fitLabel: "Подходят, если:",
    fit: [
      "требуется комплексная коррекция прикуса;",
      "необходимо контролировать положение отдельных зубов;",
      "важен предсказуемый контроль перемещения;",
      "пациент готов проходить регулярные коррекции.",
    ],
    detailLabel: "Варианты:",
    detail: ["металлические", "керамические", "самолигирующие"],
    price: "от 180\u00A0000 ₽ за курс*",
  },
  {
    title: "Элайнеры",
    icon: "/images/элайнеры.svg",
    lead: "Прозрачные съёмные каппы для коррекции положения зубов.",
    fitLabel: "Подходят, если:",
    fit: [
      "важна эстетика во время лечения;",
      "клиническая ситуация позволяет использовать элайнеры;",
      "вы готовы соблюдать режим ношения капп;",
      "хочется минимально менять привычный образ жизни.",
    ],
    detailLabel: "Преимущества:",
    detail: ["съёмные", "прозрачные", "удобны в уходе"],
    price: "от 210\u00A0000 ₽ за курс*",
  },
] as const;

export function Compare() {
  return (
    <Section id="compare" titleId="compare-title">
      <div className="compare-layout grid grid-cols-1 items-start gap-x-4 gap-y-8 lg:grid-cols-12">
        <div className="compare-copy lg:col-span-4">
          <h2 id="compare-title" className="heading-lg">
            <AccentWave>Что выбрать:</AccentWave> брекеты или элайнеры?
          </h2>
          <p className="body-lg mt-4 sm:mt-5">
            Универсально лучшей системы нет. Выбор зависит от прикуса, положения зубов, целей
            лечения и образа жизни.
          </p>
          <div className="compare-photo">
            <Image
              src="/images/что выбрать.jpg"
              alt="Улыбка с брекетами"
              fill
              sizes="(min-width: 64rem) 28rem, 100vw"
              className="object-cover object-[center_28%]"
            />
          </div>
        </div>
        <ul className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:col-span-8">
          {methods.map((method) => (
            <li key={method.title} className="min-w-0">
              <Card className="flex h-full flex-col overflow-hidden">
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <span className="floating-card-icon compare-icon">
                    <span
                      className="glyph-mask"
                      style={{ "--glyph": `url("${encodeURI(method.icon)}")` } as CSSProperties}
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="heading-md mt-4">{method.title}</h3>
                  <p className="mt-3 text-[16px] leading-[1.45] text-muted">{method.lead}</p>
                  <h4 className="mt-6 text-[16px] leading-[1.45] font-semibold">{method.fitLabel}</h4>
                  <ul className="mt-3 flex flex-col gap-2">
                    {method.fit.map((point) => (
                      <li key={point} className="text-[16px] leading-[1.45] text-muted">
                        — {point}
                      </li>
                    ))}
                  </ul>
                  <h4 className="mt-6 text-[16px] leading-[1.45] font-semibold">
                    {method.detailLabel}
                  </h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {method.detail.map((item) => (
                      <li
                        key={item}
                        className="body-sm rounded-[var(--radius-card)] bg-lavender px-3 py-2"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <hr className="rule" />
                    <p className="heading-md mt-4 text-accent">{method.price}</p>
                    <PrimaryButton href={bookingHref} className="mt-5 w-full">
                      Проконсультироваться
                    </PrimaryButton>
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ul>
        <p className="body-md lg:col-span-8 lg:col-start-5">
          *Окончательная стоимость и возможность лечения выбранным методом определяются после
          диагностики.
        </p>
      </div>
    </Section>
  );
}

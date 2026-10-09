import type { ComponentType } from "react";
import {
  CalendarIcon,
  ChatIcon,
  CircleCheckIcon,
  LensIcon,
  ShieldCheckIcon,
  SmileIcon,
} from "@/components/icons";
import { AccentWave } from "@/components/accent-wave";
import { Section } from "@/components/section";

type StepIcon = ComponentType<{ className?: string }>;

const steps: {
  title: string;
  text: string;
  meta?: string;
  icon: StepIcon;
}[] = [
  {
    title: "Консультация",
    text: "Обсуждаем жалобы, цели и возможные варианты лечения.",
    meta: "30–60 минут · от 4\u00A0900 ₽",
    icon: ChatIcon,
  },
  {
    title: "Диагностика и план",
    text: "Снимки, цифровое сканирование, анализ прикуса и расчёт стоимости.",
    meta: "от 4\u00A0900 ₽",
    icon: LensIcon,
  },
  {
    title: "Подготовка",
    text: "Профессиональная гигиена и лечение зубов при необходимости.",
    meta: "стоимость зависит от объёма процедур",
    icon: ShieldCheckIcon,
  },
  {
    title: "Начало лечения",
    text: "Установка брекетов или получение первого комплекта элайнеров.",
    meta: "от 180\u00A0000 ₽ за курс на брекетах",
    icon: SmileIcon,
  },
  {
    title: "Контроль лечения",
    text: "Регулярные визиты, коррекция и оценка динамики.",
    meta: "в среднем каждые 4–8 недель.",
    icon: CalendarIcon,
  },
  {
    title: "Ретенция",
    text: "Фиксируем результат с помощью ретейнеров и при необходимости капп.",
    meta: "от 18\u00A0000 ₽",
    icon: CircleCheckIcon,
  },
];

export function Treatment() {
  return (
    <Section
      id="treatment"
      titleId="treatment-title"
      title={
        <>
          Как проходит <AccentWave>лечение</AccentWave> и сколько это <AccentWave>стоит</AccentWave>?
        </>
      }
      description="От первой консультации до закрепления результата."
      className="section-treatment scroll-mt-24"
    >
      <ol className="treatment-track relative mt-8 flex flex-col gap-6 xl:mt-10">
        <li aria-hidden="true" className="treatment-line" />
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <li
              key={step.title}
              data-step={index + 1}
              className="treatment-step relative flex min-w-0 flex-col items-center gap-2 pl-8 text-center"
            >
              <span className="treatment-marker absolute left-0 z-10 grid size-3 place-items-center rounded-full border-2 border-ink bg-white">
                <span className="size-1 rounded-full bg-ink" />
              </span>
              {index === 0 ? (
                <span className="absolute top-1/2 left-[5px] h-[calc(50%+1.5rem)] w-px bg-accent xl:hidden" />
              ) : index < steps.length - 1 ? (
                <span className="absolute top-0 left-[5px] h-[calc(100%+1.5rem)] w-px bg-accent xl:hidden" />
              ) : (
                <span className="absolute top-0 left-[5px] h-1/2 w-px bg-accent xl:hidden" />
              )}
              <span className="floating-card-icon">
                <Icon className="size-7" />
              </span>
              <h3 className="text-[16px] leading-[1.25] font-semibold tracking-[-0.02em]">
                {step.title}
              </h3>
              <div className="flex w-full min-w-0 flex-col items-center gap-2">
                <p className="body-md min-w-0 whitespace-pre-line">{step.text}</p>
                {step.meta ? (
                  <p className="text-[15px] leading-[1.35] font-semibold text-accent">
                    {step.meta}
                  </p>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}

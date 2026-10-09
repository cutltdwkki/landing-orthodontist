"use client";

import { useState } from "react";
import { AccentWave } from "@/components/accent-wave";
import { Section } from "@/components/section";

const questions = [
  {
    id: "bite-adults",
    question: "Можно ли исправить прикус во взрослом возрасте?",
    answer:
      "Да, ортодонтическое лечение возможно у взрослых. Тактика зависит от состояния зубов, тканей пародонта и особенностей прикуса.",
  },
  {
    id: "braces-or-aligners",
    question: "Что лучше: брекеты или элайнеры?",
    answer:
      "Универсального ответа нет. Выбор зависит от клинической ситуации, целей лечения и образа жизни пациента.",
  },
  {
    id: "braces-pain",
    question: "Больно ли устанавливать брекеты?",
    answer:
      "Установка системы обычно не занимает много времени. После установки может возникнуть период адаптации и временный дискомфорт.",
  },
  {
    id: "duration",
    question: "Сколько длится лечение?",
    answer:
      "Срок зависит от сложности случая и выбранной системы. После диагностики врач сможет дать индивидуальный ориентир.",
  },
  {
    id: "extraction",
    question: "Нужно ли удалять зубы?",
    answer: "Не всегда. Необходимость удаления определяется индивидуально после диагностики.",
  },
  {
    id: "complex-aligners",
    question: "Можно ли лечиться элайнерами при сложном прикусе?",
    answer: "Возможность лечения зависит от конкретной клинической ситуации.",
  },
  {
    id: "after-braces",
    question: "Что происходит после снятия брекетов?",
    answer: "Следует ретенционный этап, который помогает сохранить результат лечения.",
  },
  {
    id: "booking",
    question: "Как записаться на консультацию?",
    answer: "Через форму на сайте, по телефону или в мессенджере.",
  },
];

export function Faq() {
  const [openIds, setOpenIds] = useState<string[]>([]);

  function toggle(id: string) {
    setOpenIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  return (
    <Section id="faq" titleId="faq-title" className="scroll-mt-24">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-x-4 lg:gap-y-0">
        <div className="min-w-0 lg:col-span-5">
          <h2 id="faq-title" className="heading-lg faq-title">
            Давайте <AccentWave>разберёмся</AccentWave> вместе
          </h2>
          <p className="body-lg mt-4 sm:mt-5">
            Перед началом ортодонтического лечения совершенно нормально сомневаться и задавать
            вопросы. Мы собрали ответы на то, что чаще всего волнует пациентов, чтобы вам было проще
            сделать первый шаг к здоровой улыбке.
          </p>
        </div>
        <div className="min-w-0 lg:col-span-7">
          <div className="faq-list">
            {questions.map((item) => {
              const open = openIds.includes(item.id);
              const panelId = `faq-panel-${item.id}`;
              const buttonId = `faq-button-${item.id}`;
              return (
                <div key={item.id} className={open ? "faq-item is-open" : "faq-item"}>
                  <h3 className="m-0">
                    <button
                      id={buttonId}
                      type="button"
                      className="faq-trigger"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => toggle(item.id)}
                    >
                      <span>{item.question}</span>
                      <span className="faq-icon" aria-hidden="true" />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="faq-panel"
                    inert={open ? undefined : true}
                  >
                    <div className="faq-panel-inner">
                      <p className="faq-answer">{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}

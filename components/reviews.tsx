"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Card } from "@/components/card";
import { ArrowIcon } from "@/components/icons";

const reviews = [
  {
    name: "Анна К.",
    category: "Брекеты · 1,5 года назад",
    text: "Долго откладывала установку брекетов, потому что боялась, что это будет сложно и неудобно. На консультации врач подробно всё объяснил, показал план лечения и ответил на мои вопросы. Сейчас уже вижу большую разницу в улыбке. Очень рада, что решилась!",
  },
  {
    name: "Мария С.",
    category: "Элайнеры · 8 месяцев назад",
    text: "Выбрала элайнеры, потому что хотелось выровнять зубы без заметной конструкции. Каппы оказались удобнее, чем я ожидала. Отдельное спасибо врачу за внимательность и подробные рекомендации по уходу. На каждом приёме понимаю, как продвигается лечение.",
  },
  {
    name: "Екатерина П.",
    category: "Консультация и диагностика",
    text: "Понравилось, что мне не стали сразу предлагать конкретную систему. Сначала провели диагностику, объяснили особенности прикуса и предложили несколько вариантов. Всё спокойно, без давления и непонятных терминов. После консультации наконец появилось понимание, с чего начать.",
  },
  {
    name: "Дмитрий В.",
    category: "Брекеты · 10 месяцев назад",
    text: "Обратился из-за скученности зубов. На первом приёме подробно разобрали мою ситуацию, обсудили сроки и стоимость. На контрольных визитах всё проходит организованно, врач объясняет изменения и отвечает на вопросы. Хороший подход без лишних обещаний.",
  },
  {
    name: "Ольга Н.",
    category: "Лечение подростка",
    text: "Искали ортодонта для дочери-подростка. Врач нашёл общий язык с ребёнком, всё объяснил понятным языком и нам, и ей. Дочь спокойно ходит на приёмы и стала внимательнее относиться к уходу за зубами. Для нас это очень важно.",
  },
  {
    name: "Ирина М.",
    category: "Ретенция · завершение лечения",
    text: "После снятия брекетов врач подробно рассказал, как сохранить результат, и объяснил, зачем нужны ретейнеры. Понравилось, что клиника уделяет внимание не только самому лечению, но и тому, что происходит после него. Чувствуется системный подход.",
  },
];

export function Reviews() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);
  const [step, setStep] = useState(0);
  const [maxShift, setMaxShift] = useState(0);
  const positions = maxPage + 1;
  const shift = Math.min(page * step, maxShift);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const measure = () => {
      const track = viewport.querySelector<HTMLElement>(".review-track");
      const slide = viewport.querySelector<HTMLElement>(".review-slide");
      if (!track || !slide) return;
      const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
      const slideStep = slide.getBoundingClientRect().width + gap;
      const max = Math.max(0, track.scrollWidth - viewport.clientWidth);
      const nextMaxPage = slideStep > 0 && max > 8 ? Math.ceil((max - 8) / slideStep) : 0;
      setStep(slideStep);
      setMaxShift(max);
      setMaxPage(nextMaxPage);
      setPage((current) => Math.min(current, nextMaxPage));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stories" aria-labelledby="stories-title" className="section section-stories scroll-mt-24">
      <div className="stories-layout">
        <div className="stories-copy">
          <h2 id="stories-title" className="heading-lg">
            Истории наших пациентов
          </h2>
          <p className="body-lg mt-4 sm:mt-5">
            За каждой улыбкой стоит своя история: первые сомнения, важное решение и постепенные
            изменения, которые приближают к желаемому результату. Мы стремимся сделать путь к
            красивой и здоровой улыбке комфортным и понятным — с внимательным отношением, подробными
            объяснениями и поддержкой на каждом этапе лечения. А вот что рассказывают о своём опыте
            наши пациенты.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 sm:mt-8">
            <button
              type="button"
              className="review-arrow"
              aria-label="Предыдущие отзывы"
              disabled={page === 0}
              onClick={() => setPage((current) => Math.max(0, current - 1))}
            >
              <ArrowIcon className="size-4 -scale-x-100" />
            </button>
            <div className="flex items-center gap-2" role="group" aria-label="Положение карусели">
              {Array.from({ length: positions }, (_, index) => (
                <button
                  key={index}
                  type="button"
                  className="review-dot"
                  aria-label={`Положение ${index + 1} из ${positions}`}
                  aria-current={index === page ? "true" : undefined}
                  onClick={() => setPage(index)}
                />
              ))}
            </div>
            <button
              type="button"
              className="review-arrow"
              aria-label="Следующие отзывы"
              disabled={page >= maxPage}
              onClick={() => setPage((current) => Math.min(maxPage, current + 1))}
            >
              <ArrowIcon className="size-4" />
            </button>
          </div>
        </div>
        <div
          ref={viewportRef}
          className="review-viewport"
          style={{ "--shift": `${shift}px` } as CSSProperties}
          role="region"
          aria-roledescription="карусель"
          aria-label="Истории наших пациентов"
        >
          <ul className="review-track">
            {reviews.map((review) => (
              <li key={review.name} className="review-slide">
                <Card className="flex h-full w-full flex-col p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <svg
                      viewBox="0 0 56 32"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                      className="h-12 w-14 shrink-0 text-accent"
                    >
                      <path
                        fill="currentColor"
                        d="M16.2 2.4c5.4 0 9.2 3.6 9.2 8.8 0 7.2-5.2 12.4-12.6 16.2l-3.2-4.2c4-2.2 6.4-4.6 6.8-7.6-1-.4-2-.6-3.2-.6-3.8 0-6.6-2.6-6.6-6.2 0-4.2 3.6-7 9.6-7Zm26 0c5.4 0 9.2 3.6 9.2 8.8 0 7.2-5.2 12.4-12.6 16.2l-3.2-4.2c4-2.2 6.4-4.6 6.8-7.6-1-.4-2-.6-3.2-.6-3.8 0-6.6-2.6-6.6-6.2 0-4.2 3.6-7 9.6-7Z"
                      />
                    </svg>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                        <p className="text-[16px] leading-[1.35] font-semibold">{review.name}</p>
                        <div className="flex gap-px text-[#FF7A00]" role="img" aria-label="5 из 5">
                          {Array.from({ length: 5 }, (_, index) => (
                            <svg key={index} viewBox="2.4 1.4 15.2 14.6" aria-hidden="true" className="size-[16px]">
                              <path
                                fill="currentColor"
                                d="m10 1.7 2.05 4.9 5.3.48-4.02 3.46 1.22 5.2L10 13.15 5.45 15.74l1.22-5.2L2.65 7.08l5.3-.48L10 1.7Z"
                              />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="mt-1 text-[15px] leading-[1.35] font-semibold text-accent">
                        {review.category}
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 text-[16px] leading-[1.5]">{review.text}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

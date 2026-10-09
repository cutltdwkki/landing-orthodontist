import Image from "next/image";
import { AccentWave } from "@/components/accent-wave";
import { Card } from "@/components/card";
import { Section } from "@/components/section";

const doctors: {
  name: string;
  role: string;
  experience: string;
  focus: string[];
  quote?: string;
  image?: string;
}[] = [
  {
    name: "Анна Воронцова",
    role: "Врач-ортодонт",
    experience: "15 лет практики",
    focus: [
      "ортодонтия взрослых",
      "лечение на брекет-системах",
      "элайнеры",
      "сложные случаи коррекции прикуса",
    ],
    quote: "Мне важно, чтобы пациент понимал не только что мы делаем, но и зачем",
    image: "/images/врач 1.png",
  },
  {
    name: "Максим Лебедев",
    role: "Врач-ортодонт",
    experience: "11 лет практики",
    focus: [
      "ортодонтия подростков и взрослых",
      "самолигирующие брекеты",
      "коррекция скученности зубов",
      "повторное ортодонтическое лечение",
    ],
    quote: "Хороший план лечения начинается с хорошей диагностики",
    image: "/images/врач 2.png",
  },
  {
    name: "Елена Морозова",
    role: "Врач-ортодонт",
    experience: "8 лет практики",
    focus: [
      "элайнеры",
      "эстетическая ортодонтия",
      "ортодонтия взрослых",
      "подготовка к протезированию",
    ],
    image: "/images/врач 3.png",
  },
];

export function Doctors() {
  return (
    <Section
      id="doctors"
      titleId="doctors-title"
      title={
        <>
          Наши <AccentWave>врачи</AccentWave>
        </>
      }
      description="Опытные ортодонты, которые подбирают лечение под вашу ситуацию и сопровождают на каждом этапе."
      className="scroll-mt-24"
    >
      <ul className="mt-8 grid grid-cols-1 gap-4 lg:mt-10 lg:grid-cols-12">
        {doctors.map((doctor) => (
          <li key={doctor.name} className="min-w-0 lg:col-span-4">
            <Card className="flex h-full flex-col overflow-hidden">
              <div className="doctor-photo">
                {doctor.image ? (
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="(min-width: 64rem) 420px, 100vw"
                    className="object-cover"
                  />
                ) : null}
                <p className="floating-card float-soft bottom-4 left-4 sm:bottom-auto sm:top-5 sm:left-5">
                  <span className="body-sm">{doctor.role}</span>
                </p>
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-[1.5rem] leading-[1.2] font-semibold tracking-[-0.03em]">
                  {doctor.name}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.35] font-semibold">{doctor.experience}</p>
                <h4 className="mt-5 text-[15px] leading-[1.35] font-semibold">Специализация</h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {doctor.focus.map((item) => (
                    <li
                      key={item}
                      className="body-sm rounded-[var(--radius-card)] bg-lavender px-3 py-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                {doctor.quote ? (
                  <p className="mt-5 text-[16px] leading-[1.45]">«{doctor.quote}»</p>
                ) : null}
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}

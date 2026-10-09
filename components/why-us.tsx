import { AccentWave } from "@/components/accent-wave";
import { Card } from "@/components/card";
import { Section } from "@/components/section";

const reasons = [
  {
    value: "15+",
    label: "лет опыта",
    text: "Работаем с ортодонтическими случаями разной сложности — от небольших эстетических коррекций до комплексного лечения прикуса.",
  },
  {
    value: "2\u00A0700+",
    label: "случаев",
    text: "Накопленный опыт позволяет подобрать тактику лечения с учётом особенностей каждого пациента.",
  },
  {
    value: "8",
    label: "ортодонтов",
    text: "В команде врачи разных специализаций, чтобы подобрать специалиста под конкретную задачу.",
  },
  {
    value: "2",
    label: "клиники",
    text: "На Петроградской и Московской.",
  },
] as const;

export function WhyUs() {
  return (
    <Section
      id="why"
      titleId="why-title"
      title={
        <>
          Почему пациенты <AccentWave>выбирают</AccentWave> нас
        </>
      }
    >
      <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-fr lg:mt-10 lg:grid-cols-12">
        {reasons.map((item) => (
          <li key={item.label} className="min-w-0 lg:col-span-3">
            <Card className="flex h-full flex-col p-5 sm:p-6">
              <p className="text-[2rem] leading-[1.02] font-semibold tracking-[-0.04em] text-accent lg:text-[2.5rem] xl:text-[2.75rem]">
                {item.value}
              </p>
              <h3 className="heading-md mt-2">{item.label}</h3>
              <p className="mt-3 text-[16px] leading-[1.45] text-muted">{item.text}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}

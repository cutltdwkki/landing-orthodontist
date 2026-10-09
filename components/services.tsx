import type { ComponentType, CSSProperties } from "react";
import Image from "next/image";
import { Card } from "@/components/card";
import { LensIcon, RetainerIcon } from "@/components/icons";
import { Section } from "@/components/section";

type ServiceIcon = ComponentType<{ className?: string }>;

const services: {
  title: string;
  text: string;
  price: string;
  image: string;
  place: string;
  icon?: ServiceIcon;
  iconSrc?: string;
}[] = [
  {
    title: "Диагностика и планирование",
    text: "Консультация ортодонта, необходимые исследования и индивидуальный план лечения.",
    price: "от 4\u00A0900 ₽",
    image: "/images/диагностика.jpg",
    place: "lg:col-start-5 lg:col-span-3 lg:row-start-1",
    icon: LensIcon,
  },
  {
    title: "Брекет-системы",
    text: "Исправление прикуса и положения зубов с помощью современных брекет-систем.",
    price: "от 180\u00A0000 ₽",
    image: "/images/установка брекетов.jpg",
    place: "lg:col-start-8 lg:col-span-5 lg:row-start-1",
    iconSrc: "/images/брекеты.svg",
  },
  {
    title: "Элайнеры",
    text: "Выравнивание зубов с помощью прозрачных съёмных капп.",
    price: "от 210\u00A0000 ₽",
    image: "/images/установка элайнеров.jpg",
    place: "lg:col-start-5 lg:col-span-5 lg:row-start-2",
    iconSrc: "/images/элайнеры.svg",
  },
  {
    title: "Ретенция",
    text: "Закрепление результата после ортодонтического лечения с помощью ретейнеров и капп.",
    price: "от 18\u00A0000 ₽",
    image: "/images/ретенция.jpg",
    place: "lg:col-start-10 lg:col-span-3 lg:row-start-2",
    icon: RetainerIcon,
  },
];

function ServiceCopy({
  title,
  text,
  price,
}: {
  title: string;
  text: string;
  price: string;
}) {
  return (
    <>
      <h3 className="heading-md">{title}</h3>
      <p className="body-md mt-2">{text}</p>
      <p className="mt-3 text-[28px] leading-[1.15] font-semibold text-accent">{price}</p>
    </>
  );
}

export function Services() {
  return (
    <Section
      id="services"
      titleId="services-title"
      title="Наши услуги"
      className="section-lavender scroll-mt-24"
    >
      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 lg:grid-cols-12">
        <div className="service-photo-slot lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:row-span-2">
          <Image
            src="/images/кабинет.jpg"
            alt="Кабинет клиники NOVA ORTHO"
            fill
            sizes="(min-width: 64rem) 480px, 100vw"
            className="object-cover"
          />
        </div>
        <ul className="contents">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <li
                key={service.title}
                tabIndex={0}
                className={`service-card min-w-0 cursor-pointer outline-none ${service.place}`}
              >
                <Card className="service-panel flex h-full flex-col p-5 sm:p-6">
                  <span className="floating-card-icon">
                    {service.iconSrc ? (
                      <span
                        className="glyph-mask"
                        style={{ "--glyph": `url("${encodeURI(service.iconSrc)}")` } as CSSProperties}
                        aria-hidden="true"
                      />
                    ) : (
                      Icon && <Icon className="size-6" />
                    )}
                  </span>
                  <div className="service-photo" aria-hidden="true">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(min-width: 64rem) 540px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="service-copy mt-auto">
                    <ServiceCopy title={service.title} text={service.text} price={service.price} />
                  </div>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

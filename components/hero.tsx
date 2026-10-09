import { AccentWave } from "@/components/accent-wave";
import { PrimaryButton, SecondaryButton } from "@/components/button-link";
import { HeroVisual } from "@/components/hero-visual";
import { bookingHref } from "@/lib/site";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="lg:h-[calc(100svh-85px)]">
      <div className="container grid items-center gap-8 py-8 sm:py-10 lg:h-full lg:min-h-0 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] lg:items-stretch lg:gap-10 lg:py-4 xl:gap-12">
        <div className="hero-rise @container flex flex-col justify-center lg:min-h-0">
          <p className="eyebrow">
            Ортодонтия для взрослых и детей
            <span aria-hidden="true"> · </span>
            Санкт-Петербург
          </p>

          <h1
            id="hero-title"
            className="heading-xl mt-3 lg:mt-4"
          >
            Исправляем прикус
            <br />
            и выравниваем зубы —
            <br />
            <span className="text-accent">
              с понятным планом
              <br />
              <AccentWave>и стоимостью лечения</AccentWave>
            </span>
          </h1>

          <p className="body-lg mt-4 max-w-[40rem] sm:mt-5">
            Брекеты или элайнеры подбираем после диагностики, а не по шаблону. До начала
            лечения вы получаете план, сроки и согласованную стоимость.
          </p>

          <div className="mt-5 flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center">
            <PrimaryButton href={bookingHref} size="lg" className="w-full shrink-0 md:w-auto">
              Записаться на консультацию
            </PrimaryButton>
            <SecondaryButton href="#services" size="lg" className="w-full shrink-0 md:w-auto">
              Узнать цены
            </SecondaryButton>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

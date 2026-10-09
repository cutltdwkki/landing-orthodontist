import Image from "next/image";
import { FloatingCard } from "@/components/card";
import { StarIcon, ToothIcon } from "@/components/icons";

export function HeroVisual() {
  return (
    <div className="hero-rise-block media-frame relative aspect-[5/4] w-full bg-[radial-gradient(ellipse_82%_76%_at_50%_42%,#f2eefb_0%,#e9e4f7_48%,#e4e0f5_82%)] lg:aspect-auto lg:h-full lg:min-h-0">
      <Image
        src="/images/hero.png"
        alt="Улыбающаяся пациентка клиники NOVA ORTHO"
        fill
        priority
        sizes="(min-width: 1024px) 720px, 100vw"
        className="portrait-frame"
      />

      <FloatingCard className="float-soft top-4 left-4 sm:top-6 sm:left-6" icon={<StarIcon />}>
        Улыбка, которая меняет
        <br />
        ощущение себя
      </FloatingCard>

      <FloatingCard
        className="float-soft-delayed right-4 bottom-4 sm:right-6 sm:bottom-6"
        icon={<ToothIcon />}
      >
        План лечения до начала
        <br />
        и фиксированная стоимость
      </FloatingCard>
    </div>
  );
}

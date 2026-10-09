"use client";

import { useEffect, useId, useState } from "react";
import { PrimaryButton } from "@/components/button-link";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/icons";
import { bookingHref, navItems, phone } from "@/lib/site";

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3 rounded-xl sm:gap-3.5">
      <span className="text-[15px] font-semibold leading-[1.05] tracking-[-0.04em] text-ink">
        NOVA
        <br />
        ORTHO
      </span>
      <span className="divider h-7" aria-hidden="true" />
      <span className="text-[13px] leading-none text-muted">ортодонтия СПб</span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1280px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header id="top" className="sticky top-0 z-40 border-b border-ink/[0.06] bg-canvas">
      <div className="container flex h-[76px] items-center gap-8 sm:h-[84px]">
        <Logo />

        <nav
          aria-label="Основная навигация"
          className="hidden flex-1 items-center justify-center gap-x-7 xl:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium whitespace-nowrap text-ink/90 transition-colors duration-200 hover:text-accent-deep"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 xl:flex">
          <a
            href={phone.href}
            className="inline-flex items-center gap-2 text-[15px] font-medium tracking-[-0.01em] whitespace-nowrap text-ink transition-colors duration-200 hover:text-accent-deep"
          >
            <PhoneIcon className="size-[22px] text-accent" />
            {phone.label}
          </a>
          <PrimaryButton href={bookingHref}>Записаться</PrimaryButton>
        </div>

        <div className="ml-auto flex items-center xl:hidden">
          <a
            href={phone.href}
            className="inline-flex size-11 items-center justify-center rounded-full text-accent transition-colors duration-200 hover:bg-lavender"
            aria-label={phone.label}
          >
            <PhoneIcon className="size-[22px] text-accent" />
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors duration-200 hover:bg-lavender"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={menuId}
          className="absolute inset-x-0 top-full h-[calc(100svh-76px)] overflow-y-auto border-b border-ink/[0.06] bg-canvas sm:h-[calc(100svh-84px)] xl:hidden"
        >
          <nav aria-label="Мобильная навигация" className="mx-auto flex max-w-[1440px] flex-col px-5 py-4 sm:px-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-3 py-3.5 text-[1.35rem] font-medium tracking-[-0.02em] text-ink transition-colors duration-200 hover:bg-lavender-soft"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={phone.href}
              className="mt-2 inline-flex items-center gap-2 rounded-2xl px-3 py-3 text-[16px] font-medium text-ink"
              onClick={() => setOpen(false)}
            >
              <PhoneIcon className="size-[22px] shrink-0 text-accent" />
              {phone.label}
            </a>
            <PrimaryButton
              href={bookingHref}
              size="lg"
              className="mt-3 mb-2 w-full"
              onClick={() => setOpen(false)}
            >
              Записаться
            </PrimaryButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

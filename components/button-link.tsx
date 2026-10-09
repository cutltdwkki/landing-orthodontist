import type { ReactNode } from "react";
import { ArrowIcon } from "@/components/icons";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  size?: "md" | "lg";
  variant?: "solid" | "outline";
  icon?: boolean;
  className?: string;
  id?: string;
  onClick?: () => void;
};

const sizes = {
  md: "h-11 gap-2 px-5 text-[15px]",
  lg: "h-14 gap-2.5 px-7 text-[17px] sm:text-[18px]",
};

const variants = {
  solid:
    "bg-accent text-white shadow-[var(--shadow-cta)] hover:bg-accent-deep hover:shadow-[var(--shadow-cta-hover)]",
  outline: "border border-accent bg-transparent text-accent hover:bg-lavender hover:text-accent-deep",
};

export function ButtonLink({
  href,
  children,
  size = "md",
  variant = "solid",
  icon = true,
  className = "",
  id,
  onClick,
}: ButtonLinkProps) {
  return (
    <a
      id={id}
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full font-medium transition-[background-color,box-shadow,color,transform] duration-300 active:translate-y-px ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
      {icon ? <ArrowIcon className={size === "lg" ? "size-[18px]" : "size-4"} /> : null}
    </a>
  );
}

type NamedButtonProps = Omit<ButtonLinkProps, "variant">;

export function PrimaryButton({ icon = true, ...props }: NamedButtonProps) {
  return <ButtonLink variant="solid" icon={icon} {...props} />;
}

export function SecondaryButton({ icon = false, ...props }: NamedButtonProps) {
  return <ButtonLink variant="outline" icon={icon} {...props} />;
}

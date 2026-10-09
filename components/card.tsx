import type { ReactNode } from "react";

type CardProps = {
  className?: string;
  children: ReactNode;
};

export function Card({ className = "", children }: CardProps) {
  return <div className={`card ${className}`}>{children}</div>;
}

export function CardElevated({ className = "", children }: CardProps) {
  return <div className={`card-elevated ${className}`}>{children}</div>;
}

export function CardAccent({ className = "", children }: CardProps) {
  return <div className={`card-accent ${className}`}>{children}</div>;
}

export function FloatingCard({
  className = "",
  icon,
  children,
}: CardProps & { icon: ReactNode }) {
  return (
    <div className={`floating-card ${className}`}>
      <span className="floating-card-icon">{icon}</span>
      <p className="body-sm">{children}</p>
    </div>
  );
}

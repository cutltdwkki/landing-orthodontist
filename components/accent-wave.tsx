import type { ReactNode } from "react";

export function AccentWave({ children }: { children: ReactNode }) {
  return (
    <span className="text-accent accent-wave">
      {children}
      <svg viewBox="0 0 120 12" preserveAspectRatio="none" aria-hidden="true">
        <path
          fill="currentColor"
          d="M2 6.4C16 6.6 24 2.2 44 3.9 64 5.6 72 8.9 94 6.3 106 5.1 112 4.5 118 5.4 112 7.3 106 7.9 94 9.1 72 11.5 64 8.1 44 6.6 24 4.9 16 8.5 2 7.6Z"
        />
      </svg>
    </span>
  );
}

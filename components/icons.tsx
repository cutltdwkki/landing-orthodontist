type IconProps = {
  className?: string;
};

export function ArrowIcon({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M3.5 10h12.2M11.2 5.4 16.2 10l-5 4.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PhoneIcon({ className = "size-[18px]" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M6.2 3.6h2l1 2.5-1.35 1.05a8.2 8.2 0 0 0 4 4l1.05-1.35 2.5 1v2c0 .7-.55 1.25-1.25 1.2C8.4 13.7 6.3 11.6 5.95 5.05c-.05-.75.5-1.45 1.25-1.45Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M4 8h16M4 16h16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function StarIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M12 3.1 14.15 9.15 20.7 12 14.15 14.85 12 20.9 9.85 14.85 3.3 12 9.85 9.15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChatIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M6 6.2h12a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2h-6.2L7.4 19.2V16H6a2 2 0 0 1-2-2V8.2a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LensIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="7.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function SmileIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8.2 13.4c.8 1.5 2.2 2.3 3.8 2.3s3-.8 3.8-2.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9 10.2h.01M15 10.2h.01"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ShieldCheckIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M12 3.4 19 6.1v5.4c0 4.1-2.7 7-7 8.6-4.3-1.6-7-4.5-7-8.6V6.1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8.7 12.1 10.9 14.3 15.4 9.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CalendarIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect
        x="4.5"
        y="5.5"
        width="15"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4.5 9.5h15M8 3.7v3.2M16 3.7v3.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CircleCheckIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8.3 12.2 11 14.9 15.8 9.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BracesIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M4.8 13.2c2.3 3.4 12.1 3.4 14.4 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7.1 11.2h2.1v3.4H7.1zM10.95 12.5h2.1v3.4h-2.1zM14.8 11.2h2.1v3.4h-2.1z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RetainerIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M7 8.2h10M7.4 8.2v5.1c0 2.5 2.1 4.5 4.6 4.5s4.6-2 4.6-4.5V8.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 8.2v2.1M12 8.2v2.6M14.8 8.2v2.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AlignerIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M8 7.2h8c.9 0 1.6.7 1.6 1.6v4.2c0 2.7-2.4 4.8-5.6 4.8s-5.6-2.1-5.6-4.8V8.8c0-.9.7-1.6 1.6-1.6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8.8 7.2c.3 1.5.9 2.3 1.6 2.3s1.2-.8 1.6-2.3c.3 1.5.9 2.3 1.6 2.3s1.3-.8 1.6-2.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ToothIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M8 5.2c-1.7 1.1-2.3 3-2.1 5.1.2 2.6 1.1 5.2 1.6 7.2.3 1.3 1 2.2 1.9 2.2.9 0 1.2-1 1.5-2.3.2-.9.5-1.2 1-.3.5.9 1 2.6 1.9 2.6s1.6-.9 1.9-2.2c.5-2 1.4-4.6 1.6-7.2.2-2.1-.4-4-2.1-5.1-1.1-.7-2-.4-2.9.4-.4.3-.7.3-1.1 0-.9-.8-1.8-1.1-2.9-.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

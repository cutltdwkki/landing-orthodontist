import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  titleId?: string;
  number?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export function Section({
  id,
  titleId,
  number,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={`section ${className}`}
    >
      <div className="container">
        {number || eyebrow ? (
          <p className="eyebrow">
            {number ? <span className="section-index">{number}</span> : null}
            {number && eyebrow ? <span aria-hidden="true"> · </span> : null}
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <h2 id={titleId} className={`heading-lg ${number || eyebrow ? "mt-3 lg:mt-4" : ""}`}>
            {title}
          </h2>
        ) : null}
        {description ? <p className="body-lg mt-4 max-w-[40rem] sm:mt-5">{description}</p> : null}
        {children}
      </div>
    </section>
  );
}

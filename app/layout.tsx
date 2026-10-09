import type { Metadata } from "next";
import { Caveat, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NOVA ORTHO — ортодонтия в Санкт-Петербурге",
  description:
    "Исправляем прикус и выравниваем зубы. До начала лечения — понятный план, сроки и согласованная стоимость.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className={`${manrope.className} min-h-full overflow-x-clip bg-canvas text-ink`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
        >
          Перейти к содержанию
        </a>
        {children}
      </body>
    </html>
  );
}

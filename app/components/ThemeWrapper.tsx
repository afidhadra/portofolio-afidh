"use client";

import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";

import { AbstractIntlMessages } from "next-intl";

export default function ThemeWrapper({ children, locale, messages }: { children: React.ReactNode; locale: string; messages: AbstractIntlMessages }) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
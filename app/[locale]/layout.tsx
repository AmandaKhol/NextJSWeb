import { Roboto } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import "./globals.css";

import type { Metadata } from "next";

import Footer from "@/components/Footer";
import ModalProvider from "@/components/modals/Provider";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Amanda Khol",
  description: "Personal web site for illustration",
};

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return [
    { locale: "es", category: "vegano" },
    { locale: "es", category: "vegetariano" },
    { locale: "en", category: "vegan" },
    { locale: "en", category: "vegetarian" },
  ];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`min-h-screen flex flex-col ${roboto.className}`}>
        <NextIntlClientProvider messages={messages}>
          <ModalProvider>
            <NavBar />
            <main className="flex-1 w-fullflex">{children}</main>
            <Footer />
          </ModalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

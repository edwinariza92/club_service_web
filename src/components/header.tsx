"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/tecnologia", label: "Tecnología" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gris-300 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-5 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-club-service-transparente.png"
            alt="Club Service"
            width={160}
            height={40}
            priority
          />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy transition-colors hover:text-navy-700"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="rounded-card bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
          >
            Solicitar propuesta
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-card border border-gris-300 p-2 text-navy lg:hidden"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-gris-300 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-[1200px] flex-col gap-1 px-5 py-3 md:px-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-card px-2 py-2 text-sm font-medium text-navy hover:bg-gris-50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="mt-2 rounded-card bg-navy px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-navy-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
              onClick={() => setOpen(false)}
            >
              Solicitar propuesta
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

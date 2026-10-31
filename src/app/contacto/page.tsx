import Link from "next/link";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { EMAIL_CONTACTO, WHATSAPP_PROYECTO } from "@/lib/links";

export const metadata = {
  title: "Contacto",
  description: "Solicite una propuesta para la operación integral de su Club House.",
  alternates: { canonical: "/contacto" },
};

export default function Contacto() {
  return (
    <>
      <section className="bg-gradient-to-b from-gris-50 to-white">
        <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-6 lg:py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-esmeralda-600">
            Contacto
          </span>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            Solicitar propuesta
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gris-600">
            Cuéntenos sobre su conjunto. Le respondemos con un alcance claro y
            próximo paso.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-[1200px] px-5 py-12 md:px-6">
        <div className="mb-8 flex flex-col gap-4 rounded-panel border border-esmeralda/40 bg-esmeralda-100 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-navy">
              ¿Prefiere ver primero la plataforma?
            </h2>
            <p className="mt-1 text-sm text-gris-600">
              Solicite una demostración guiada de 20 a 30 minutos.
            </p>
          </div>
          <Link
            href="/demo"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-card bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-700"
          >
            Solicitar demo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-panel border border-gris-300 bg-white p-8 shadow-suave">
            <h2 className="text-2xl font-semibold">Escríbanos</h2>
            <p className="mt-2 text-gris-600">
              Responderemos lo antes posible.
            </p>
            <div className="mt-6 grid gap-4">
              <a
                href={WHATSAPP_PROYECTO}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-card border border-gris-300 p-4 transition-colors hover:bg-gris-50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-card bg-esmeralda-100">
                  <MessageCircle className="h-5 w-5 text-esmeralda-600" />
                </div>
                <div>
                  <p className="font-semibold text-navy">WhatsApp</p>
                  <p className="text-sm text-gris-600">304 452 5315</p>
                </div>
              </a>
              <a
                href={`mailto:${EMAIL_CONTACTO}?subject=${encodeURIComponent("Solicitud de propuesta - Club Service")}`}
                className="flex items-center gap-4 rounded-card border border-gris-300 p-4 transition-colors hover:bg-gris-50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-card bg-navy/5">
                  <Mail className="h-5 w-5 text-navy" />
                </div>
                <div>
                  <p className="font-semibold text-navy">Correo</p>
                  <p className="text-sm text-gris-600">{EMAIL_CONTACTO}</p>
                </div>
              </a>
            </div>
          </article>
          <article className="rounded-panel border border-gris-300 bg-white p-8 shadow-suave">
            <h2 className="text-2xl font-semibold">Información para la propuesta</h2>
            <ul className="mt-4 space-y-3 text-sm text-gris-600">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-esmeralda-600" />
                <span>Nombre del conjunto y dirección</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-esmeralda-600" />
                <span>Número de unidades / torres</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-esmeralda-600" />
                <span>Zonas comunes que desea operar</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-esmeralda-600" />
                <span>Fecha tentativa de inicio</span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-gris-600">
              Con esta información preparamos un alcance claro.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

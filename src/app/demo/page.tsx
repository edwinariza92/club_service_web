import Link from "next/link";
import {
  CalendarCheck,
  CheckCircle2,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  ShieldCheck,
} from "lucide-react";
import { DemoForm } from "./demo-form";
import { EMAIL_CONTACTO, EMAIL_DEMO, WHATSAPP_DEMO } from "@/lib/links";

export const metadata = {
  title: "Solicitar demo",
  description:
    "Solicite una demostración guiada de la plataforma de reservas de Club Service.",
  alternates: { canonical: "/demo" },
};

const puntos = [
  "Reserva de zonas comunes con horarios y cupos",
  "Check-in con código QR y control de acceso",
  "Panel de administración, miembros, eventos y reportes",
  "Experiencia del residente desde el celular",
];

export default function Demo() {
  return (
    <>
      <section className="bg-gradient-to-b from-gris-50 to-white">
        <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-6 lg:py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-esmeralda-600">
            Demo
          </span>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            Solicita una demostración de la plataforma
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-gris-600">
            Agenda una sesión guiada de 20 a 30 minutos. Te mostramos cómo se
            administran las reservas, el check-in y la experiencia del residente
            en tu conjunto.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 pb-16 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <DemoForm />

          <div className="space-y-6">
            <article className="rounded-panel border border-gris-300 bg-white p-6 shadow-suave">
              <h2 className="text-xl font-semibold text-navy">Qué verás</h2>
              <ul className="mt-4 space-y-3 text-sm text-gris-600">
                {puntos.map((punto) => (
                  <li key={punto} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-esmeralda-600" />
                    <span>{punto}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-panel border border-gris-300 bg-white p-6 shadow-suave">
              <h2 className="text-xl font-semibold text-navy">Prefieres hablar ya</h2>
              <p className="mt-2 text-sm leading-6 text-gris-600">
                Escríbenos y coordinamos la demo por el canal que prefieras.
              </p>
              <div className="mt-5 grid gap-3">
                <a
                  href={WHATSAPP_DEMO}
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
                  href={EMAIL_DEMO}
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

            <article className="rounded-panel bg-gradient-to-br from-navy to-navy-950 p-6 text-white">
              <MonitorSmartphone className="h-6 w-6 text-sky" />
              <h2 className="mt-3 text-xl font-semibold">
                Sin instalaciones ni compromisos
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/80">
                La demo se hace en línea con datos de ejemplo. No necesitas crear
                cuentas ni cargar información de tu conjunto.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-medium text-white/70">
                <ShieldCheck className="h-4 w-4 text-esmeralda" />
                Datos reales de tu comunidad no se solicitan en esta etapa.
              </div>
            </article>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gris-600">
          <span className="inline-flex items-center gap-2">
            <CalendarCheck className="h-4 w-4 text-esmeralda-600" />
            Coordinamos fecha y hora contigo
          </span>
          <Link href="/contacto" className="font-semibold text-navy hover:text-navy-700">
            Solicitar una propuesta
          </Link>
        </div>
      </section>
    </>
  );
}

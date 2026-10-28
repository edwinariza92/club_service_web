import Link from "next/link";
import { ArrowRight, Bell, CalendarDays, CreditCard, Users } from "lucide-react";

const features = [
  { icon: CalendarDays, title: "Reservas", desc: "Zonas comunes con horarios, aforo y reglas por conjunto." },
  { icon: Bell, title: "Avisos", desc: "Comunicados centralizados y notificaciones claras." },
  { icon: Users, title: "PQRS y seguimiento", desc: "Seguimiento a solicitudes con trazabilidad." },
  { icon: CreditCard, title: "Pagos / control", desc: "Orden en el uso de zonas y mayor claridad." },
];

export const metadata = {
  title: "Tecnología",
  description: "Plataforma propia de reservas, avisos, PQRS y control para Club Houses.",
};

export default function Tecnologia() {
  return (
    <>
      <section className="bg-gradient-to-b from-gris-50 to-white">
        <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-6 lg:py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-esmeralda-600">
            Tecnología
          </span>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            Una plataforma para ordenar el día a día
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gris-600">
            Menos llamadas, menos confusiones. Todo en un solo lugar para residentes
            y administración.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-[1200px] px-5 py-12 md:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {features.map((item) => (
            <article
              key={item.title}
              className="rounded-panel border border-gris-300 bg-white p-6 shadow-suave"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-card bg-navy/5">
                <item.icon className="h-5 w-5 text-navy" />
              </div>
              <h2 className="mt-4 text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-gris-600">{item.desc}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-panel border border-gris-300 bg-white p-8 shadow-suave md:p-10">
          <h2 className="text-2xl font-semibold">Demostración</h2>
          <p className="mt-2 max-w-2xl text-gris-600">
            Podemos mostrarle el flujo de reservas y avisos con un entorno de
            demostración.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-card bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
            >
              Agendar demostración
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://clubservice.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-card border border-gris-300 px-6 py-3 text-sm font-semibold text-navy hover:bg-gris-50"
            >
              Ver app actual
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

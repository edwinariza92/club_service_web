import Link from "next/link";
import { ArrowRight, CalendarCheck, ConciergeBell, Dumbbell, Sparkles, Users, Waves, Wrench } from "lucide-react";

const items = [
  { icon: ConciergeBell, title: "Recepción", desc: "Atención al público, control de acceso, seguimiento a novedades y reporte diario." },
  { icon: Waves, title: "Piscina", desc: "Limpieza, revisión química, señalización, aforo, botiquín y protocolos básicos." },
  { icon: Dumbbell, title: "Gimnasio", desc: "Orden, revisión de equipos, inventario, recordatorios de uso y control." },
  { icon: Sparkles, title: "Aseo y zonas comunes", desc: "Rutinas por área, insumos, control de calidad y seguimiento." },
  { icon: Users, title: "Todería / apoyo", desc: "Apoyo a mudanzas, entrega de elementos, recorridos y soporte diario." },
  { icon: CalendarCheck, title: "Actividades recreativas", desc: "Programación, inscripción, coordinación y seguimiento." },
  { icon: Wrench, title: "Mantenimiento menor", desc: "Novedades, PQRS operativas, seguimiento a terceros y reporte a administración." },
];

export const metadata = {
  title: "Servicios",
  description: "Recepción, piscina, gimnasio, aseo, todería, actividades y mantenimiento menor para Club Houses.",
  alternates: { canonical: "/servicios" },
};

export default function Servicios() {
  return (
    <>
      <section className="bg-gradient-to-b from-gris-50 to-white">
        <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-6 lg:py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-esmeralda-600">
            Servicios
          </span>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            Operación integral para su Club House
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gris-600">
            Un solo contrato para cubrir las áreas que hoy consumen tiempo de la
            administración.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-[1200px] px-5 py-12 md:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
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
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-card bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-700"
          >
            Solicitar propuesta
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/tecnologia"
            className="inline-flex items-center gap-2 rounded-card border border-gris-300 px-6 py-3 text-sm font-semibold text-navy hover:bg-gris-50"
          >
            Conocer tecnología
          </Link>
        </div>
      </section>
    </>
  );
}

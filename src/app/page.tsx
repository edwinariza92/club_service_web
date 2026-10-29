import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ConciergeBell,
  Dumbbell,
  ShieldCheck,
  Sparkles,
  Users,
  Waves,
  Wrench,
} from "lucide-react";

const services = [
  { icon: ConciergeBell, title: "Recepción", desc: "Atención, control de acceso y seguimiento a solicitudes." },
  { icon: Waves, title: "Piscina", desc: "Mantenimiento, señalización, aforo y seguridad." },
  { icon: Dumbbell, title: "Gimnasio", desc: "Orden, equipos, inventario y uso responsable." },
  { icon: Sparkles, title: "Aseo y zonas comunes", desc: "Rutinas, insumos, control de calidad." },
  { icon: Users, title: "Todería / apoyo", desc: "Apoyo operativo y logística diaria." },
  { icon: CalendarCheck, title: "Actividades recreativas", desc: "Programación, registro y coordinación." },
  { icon: Wrench, title: "Mantenimiento menor", desc: "Seguimiento a novedades, PQRS y correctivos." },
];

const steps = [
  { n: "01", title: "Diagnóstico", desc: "Revisamos el estado actual del Club House." },
  { n: "02", title: "Propuesta", desc: "Alcance, equipo, cronograma y ruta clara." },
  { n: "03", title: "Puesta en marcha", desc: "Inducción, inventario, rutinas y arranque." },
  { n: "04", title: "Seguimiento", desc: "Informes, control y mejora continua." },
];

const faqs = [
  {
    q: "¿Operan solo en Bogotá?",
    a: "Priorizamos proyectos en Bogotá y Cundinamarca. Evaluamos otros casos por solicitud.",
  },
  {
    q: "¿Usan una app propia?",
    a: "Sí. Tenemos una plataforma de reservas, pagos, avisos y control para ordenar el uso de zonas comunes.",
  },
  {
    q: "¿Qué incluye la operación integral?",
    a: "Recepción, piscina, gimnasio, aseo, todería, actividades, mantenimiento menor y soporte administrativo operativo.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gris-50 to-white" />
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:px-6 lg:py-24">
          <div>
            <span className="inline-flex items-center rounded-chip border border-esmeralda/40 bg-esmeralda-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-esmeralda-600">
              Operación integral
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Operamos y administramos su Club House
            </h1>
            <p className="mt-4 text-lg leading-8 text-gris-600">
              Un solo equipo en sitio y una plataforma propia para mantener el club
              ordenado, seguro y funcional. Menos frentes, más tranquilidad para la
              administración.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-card bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
              >
                Solicitar propuesta
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/tecnologia"
                className="inline-flex items-center gap-2 rounded-card border border-gris-300 px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gris-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
              >
                Conocer tecnología
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gris-600 sm:grid-cols-4">
              <div className="rounded-card border border-gris-300 bg-white p-4">
                <p className="text-base font-semibold leading-tight text-navy sm:text-lg">Equipo en sitio</p>
                <p className="mt-1 text-xs sm:text-sm">Presencia y seguimiento</p>
              </div>
              <div className="rounded-card border border-gris-300 bg-white p-4">
                <p className="text-base font-semibold leading-tight text-navy sm:text-lg">Procesos claros</p>
                <p className="mt-1 text-xs sm:text-sm">Rutinas y control</p>
              </div>
              <div className="rounded-card border border-gris-300 bg-white p-4">
                <p className="text-base font-semibold leading-tight text-navy sm:text-lg">Tecnología propia</p>
                <p className="mt-1 text-xs sm:text-sm">Reservas y avisos</p>
              </div>
              <div className="rounded-card border border-gris-300 bg-white p-4">
                <p className="text-base font-semibold leading-tight text-navy sm:text-lg">Transparente</p>
                <p className="mt-1 text-xs sm:text-sm">Informes periódicos</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-10 -top-10 -z-10 h-64 w-64 rounded-full bg-sky-100 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 -z-10 h-64 w-64 rounded-full bg-esmeralda-100 blur-3xl" />
            <div className="overflow-hidden rounded-panel border border-gris-300 shadow-suave">
              <div className="flex h-[420px] flex-col justify-between bg-gradient-to-br from-navy to-navy-950 p-10 text-white">
                <div>
                  <p className="text-sm uppercase tracking-[0.12em] text-white/70">
                    Club Service
                  </p>
                  <p className="mt-2 text-3xl font-semibold">Tu club, en las mejores manos.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-card bg-white/10 p-4 backdrop-blur">
                    <ShieldCheck className="h-5 w-5 text-sky" />
                    <p className="mt-2 text-sm font-semibold">Seguridad y orden</p>
                    <p className="mt-1 text-xs text-white/70">Piscina, gimnasio y acceso</p>
                  </div>
                  <div className="rounded-card bg-white/10 p-4 backdrop-blur">
                    <CalendarCheck className="h-5 w-5 text-esmeralda" />
                    <p className="mt-2 text-sm font-semibold">Zonas comunes</p>
                    <p className="mt-1 text-xs text-white/70">Reservas claras y ágiles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-16 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-esmeralda-600">
              Qué operamos
            </span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Todo lo que necesita el Club House
            </h2>
            <p className="mt-2 max-w-2xl text-lg text-gris-600">
              Cubrimos las áreas críticas con rutinas, responsables y seguimiento.
            </p>
          </div>
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-navy-700"
          >
            Ver todos los servicios
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((item) => (
            <article
              key={item.title}
              className="rounded-panel border border-gris-300 bg-white p-6 shadow-suave transition-shadow hover:shadow-[0_1px_2px_rgba(11,45,91,0.06),0_12px_32px_rgba(11,45,91,0.1)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-card bg-navy/5">
                <item.icon className="h-5 w-5 text-navy" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gris-600">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gris-50">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-esmeralda-600">
                Cómo trabajamos
              </span>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                Puesta en marcha clara y ordenada
              </h2>
              <p className="mt-2 max-w-2xl text-lg text-gris-600">
                Sin sorpresas. Un plan paso a paso para arrancar con orden.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.n}
                className="relative overflow-hidden rounded-panel border border-gris-300 bg-white p-6 shadow-suave"
              >
                <span className="text-4xl font-semibold text-navy/10">{step.n}</span>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gris-600">{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-16 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-esmeralda-600">
              Tecnología
            </span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Orden con una plataforma propia
            </h2>
            <p className="mt-4 text-lg leading-8 text-gris-600">
              Centralizamos reservas, avisos, PQRS y seguimiento en un solo lugar.
              Menos llamadas, más claridad para residentes y administración.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gris-600">
              {[
                "Reservas de zonas comunes con reglas claras",
                "Avisos y comunicados centralizados",
                "Seguimiento a solicitudes y PQRS",
                "Control por conjunto y por usuario",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-esmeralda-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/tecnologia"
                className="inline-flex items-center gap-2 rounded-card border border-gris-300 px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gris-50"
              >
                Ver plataforma
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-card bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
              >
                Solicitar demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-panel border border-gris-300 shadow-suave">
              <div className="flex h-[380px] flex-col justify-between bg-gradient-to-br from-gris-50 to-white p-8">
                <div>
                  <p className="text-sm font-semibold text-navy">Panel de reservas</p>
                  <p className="mt-1 text-sm text-gris-600">
                    Vista clara para residentes y administración
                  </p>
                </div>
                <div className="grid gap-3">
                  <div className="rounded-card border border-gris-300 bg-white p-4">
                    <p className="text-sm font-semibold text-navy">Piscina</p>
                    <p className="mt-1 text-xs text-gris-600">Disponible</p>
                  </div>
                  <div className="rounded-card border border-gris-300 bg-white p-4">
                    <p className="text-sm font-semibold text-navy">Salón social</p>
                    <p className="mt-1 text-xs text-gris-600">Por reservar</p>
                  </div>
                  <div className="rounded-card border border-gris-300 bg-white p-4">
                    <p className="text-sm font-semibold text-navy">Gimnasio</p>
                    <p className="mt-1 text-xs text-gris-600">Control de aforo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gris-50">
        <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-esmeralda-600">
              Preguntas frecuentes
            </span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Respuestas claras
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <article
                key={item.q}
                className="rounded-panel border border-gris-300 bg-white p-6 shadow-suave"
              >
                <h3 className="text-lg font-semibold">{item.q}</h3>
                <p className="mt-2 text-sm leading-6 text-gris-600">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-16 md:px-6">
        <div className="overflow-hidden rounded-panel bg-navy px-6 py-10 text-center shadow-suave md:px-12 md:py-14">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            ¿Listos para ordenar su Club House?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-white/90">
            Conversemos sobre su conjunto. Le entregamos una propuesta clara, sin
            rodeos.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-card bg-white px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gris-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
              >
                Solicitar propuesta
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/tecnologia"
                className="inline-flex items-center gap-2 rounded-card border border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
              >
                Conocer tecnología
              </Link>
          </div>
        </div>
      </section>
    </>
  );
}

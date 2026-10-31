export const metadata = {
  title: "Nosotros",
  description: "Club Service: operación integral de Club Houses y conjuntos residenciales.",
  alternates: { canonical: "/nosotros" },
};

export default function Nosotros() {
  return (
    <>
      <section className="bg-gradient-to-b from-gris-50 to-white">
        <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-6 lg:py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-esmeralda-600">
            Nosotros
          </span>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            Un equipo que cuida su club
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gris-600">
            Club Service nació con el objetivo de ofrecer una operación integral
            clara, ordenada y confiable para Club Houses y conjuntos residenciales.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-[1200px] px-5 py-12 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-panel border border-gris-300 bg-white p-8 shadow-suave">
            <h2 className="text-2xl font-semibold">Misión</h2>
            <p className="mt-3 text-lg leading-8 text-gris-600">
              Brindar soluciones integrales para la operación y administración de
              Club Houses, combinando talento humano, deporte, recreación,
              mantenimiento y tecnología para ofrecer espacios seguros, funcionales
              y de alta calidad.
            </p>
          </article>
          <article className="rounded-panel border border-gris-300 bg-white p-8 shadow-suave">
            <h2 className="text-2xl font-semibold">Visión</h2>
            <p className="mt-3 text-lg leading-8 text-gris-600">
              Convertirnos en una empresa referente en Colombia en la operación
              integral de Club Houses y espacios residenciales, reconocida por la
              calidad, la gestión responsable y el uso de tecnología.
            </p>
          </article>
        </div>
        <article className="mt-6 rounded-panel border border-gris-300 bg-white p-8 shadow-suave">
          <h2 className="text-2xl font-semibold">Valores</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Servicio",
              "Responsabilidad",
              "Seguridad",
              "Transparencia",
              "Innovación",
              "Trabajo en equipo",
              "Mejora continua",
            ].map((v) => (
              <div key={v} className="rounded-card border border-gris-300 p-4 text-center">
                <p className="font-semibold text-navy">{v}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}

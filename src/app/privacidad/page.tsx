import { EMAIL_CONTACTO } from "@/lib/links";

export const metadata = {
  title: "Política de privacidad",
  description: "Política de tratamiento de datos personales de Club Service.",
  alternates: { canonical: "/privacidad" },
};

export default function Privacidad() {
  return (
    <>
      <section className="bg-gradient-to-b from-gris-50 to-white">
        <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-6 lg:py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-esmeralda-600">
            Legal
          </span>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            Política de privacidad
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gris-600">
            Cumplimos con la Ley 1581 de 2012 de Colombia.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-[800px] px-5 py-12 md:px-6">
        <article className="prose prose-slate max-w-none">
          <h2>Responsable del tratamiento</h2>
          <p>Club Service, en su calidad de responsable, trata los datos personales conforme a la Ley 1581 de 2012.</p>
          <h2>Finalidad</h2>
          <p>Los datos se utilizan para responder solicitudes, cotizaciones, atención de PQRS y gestión comercial.</p>
          <h2>Derechos</h2>
          <p>Usted tiene derecho a conocer, actualizar, rectificar y suprimir sus datos, o revocar la autorización.</p>
          <h2>Contacto</h2>
          <p>Para ejercer sus derechos escriba a {EMAIL_CONTACTO}</p>
          <p className="text-sm text-gris-600">Última actualización: 2026-10-22</p>
        </article>
      </section>
    </>
  );
}

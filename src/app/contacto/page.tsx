import { Mail, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Contacto",
  description: "Solicite una propuesta para la operación integral de su Club House.",
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
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-panel border border-gris-300 bg-white p-8 shadow-suave">
            <h2 className="text-2xl font-semibold">Escríbanos</h2>
            <p className="mt-2 text-gris-600">
              Responderemos lo antes posible.
            </p>
            <div className="mt-6 grid gap-4">
              <a
                href="https://wa.me/573000000000?text=Hola%2C%20quisiera%20solicitar%20una%20propuesta%20para%20la%20operaci%C3%B3n%20de%20mi%20Club%20House"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-card border border-gris-300 p-4 transition-colors hover:bg-gris-50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-card bg-esmeralda-100">
                  <MessageCircle className="h-5 w-5 text-esmeralda-600" />
                </div>
                <div>
                  <p className="font-semibold text-navy">WhatsApp</p>
                  <p className="text-sm text-gris-600">Respuesta ágil</p>
                </div>
              </a>
              <a
                href="mailto:contacto@clubservice.co"
                className="flex items-center gap-4 rounded-card border border-gris-300 p-4 transition-colors hover:bg-gris-50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-card bg-navy/5">
                  <Mail className="h-5 w-5 text-navy" />
                </div>
                <div>
                  <p className="font-semibold text-navy">Correo</p>
                  <p className="text-sm text-gris-600">contacto@clubservice.co</p>
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

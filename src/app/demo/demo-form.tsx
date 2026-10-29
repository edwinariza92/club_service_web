"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

const campos = [
  { name: "nombre", label: "Nombre y apellido", type: "text", placeholder: "Ana Gómez" },
  { name: "conjunto", label: "Nombre del conjunto", type: "text", placeholder: "Conjunto Los Pinos" },
  { name: "ciudad", label: "Ciudad", type: "text", placeholder: "Bogotá" },
  { name: "unidades", label: "Número de unidades", type: "number", placeholder: "120" },
  { name: "correo", label: "Correo electrónico", type: "email", placeholder: "ana@conjunto.com" },
  { name: "whatsapp", label: "WhatsApp", type: "tel", placeholder: "300 123 4567" },
];

export function DemoForm() {
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEnviando(true);
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();
    formData.forEach((value, key) => body.append(key, String(value)));

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) throw new Error("No se pudo enviar la solicitud");
      setEnviado(true);
      form.reset();
    } catch {
      setError(
        "No pudimos enviar el formulario. Escríbenos por WhatsApp o correo y te atendemos de inmediato."
      );
    } finally {
      setEnviando(false);
    }
  }

  if (enviado) {
    return (
      <div className="flex flex-col items-center rounded-panel border border-esmeralda/40 bg-esmeralda-100 p-8 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
          <CheckCircle2 className="h-7 w-7 text-esmeralda-600" />
        </div>
        <h3 className="mt-4 text-2xl font-semibold text-navy">Solicitud recibida</h3>
        <p className="mt-2 max-w-md text-sm leading-6 text-gris-600">
          Gracias por tu interés. Te contactaremos para coordinar una demostración
          de la plataforma.
        </p>
        <button
          type="button"
          onClick={() => setEnviado(false)}
          className="mt-6 text-sm font-semibold text-navy underline decoration-esmeralda underline-offset-4"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form
      name="solicitar-demo"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="rounded-panel border border-gris-300 bg-white p-6 shadow-suave md:p-8"
    >
      <input type="hidden" name="form-name" value="solicitar-demo" />
      <p className="hidden">
        <label>
          No completar
          <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {campos.map((campo) => (
          <div key={campo.name} className={campo.name === "nombre" ? "sm:col-span-2" : undefined}>
            <label
              htmlFor={campo.name}
              className="text-sm font-medium text-gris-900"
            >
              {campo.label}
            </label>
            <input
              id={campo.name}
              name={campo.name}
              type={campo.type}
              placeholder={campo.placeholder}
              min={campo.type === "number" ? 1 : undefined}
              required
              className="mt-1.5 h-11 w-full rounded-card border border-gris-300 bg-white px-3 text-sm text-gris-900 outline-none transition-shadow focus:shadow-foco"
            />
          </div>
        ))}
      </div>

      <div className="mt-4">
        <label htmlFor="mensaje" className="text-sm font-medium text-gris-900">
          ¿Qué te gustaría ver? <span className="font-normal text-gris-600">(opcional)</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          placeholder="Reservas, check-in, eventos, reportes..."
          className="mt-1.5 w-full rounded-card border border-gris-300 bg-white px-3 py-2.5 text-sm text-gris-900 outline-none transition-shadow focus:shadow-foco"
        />
      </div>

      {error ? (
        <p className="mt-4 rounded-card bg-red-50 px-4 py-3 text-sm text-error">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={enviando}
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-card bg-navy px-6 text-base font-semibold text-white transition-colors hover:bg-navy-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {enviando ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Solicitar demo
          </>
        )}
      </button>
      <p className="mt-3 text-center text-xs text-gris-600">
        Usaremos tus datos únicamente para coordinar la demostración.
      </p>
    </form>
  );
}

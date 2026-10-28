import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-gris-300 bg-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-12 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-club-service-transparente.png"
              alt="Club Service"
              width={170}
              height={42}
            />
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-gris-600">
            Operación integral de Club Houses y conjuntos residenciales. Equipo en
            sitio, procesos claros y plataforma propia para ordenar el día a día.
          </p>
          <p className="mt-4 text-sm italic text-gris-600">
            Tu club, en las mejores manos.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-navy">Empresa</h3>
          <ul className="mt-3 space-y-2 text-sm text-gris-600">
            <li>
              <Link href="/nosotros" className="hover:text-navy">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/servicios" className="hover:text-navy">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/tecnologia" className="hover:text-navy">
                Tecnología
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-navy">Contacto</h3>
          <ul className="mt-3 space-y-2 text-sm text-gris-600">
            <li>
              <Link href="/contacto" className="hover:text-navy">
                Solicitar propuesta
              </Link>
            </li>
            <li>
              <Link href="/privacidad" className="hover:text-navy">
                Política de privacidad
              </Link>
            </li>
            <li>
              <a
                href="https://clubservice.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-navy"
              >
                App de reservas
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gris-300">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-5 py-4 text-xs text-gris-600 md:flex-row md:items-center md:justify-between md:px-6">
          <p>© {year} Club Service. Todos los derechos reservados.</p>
          <p>Colombia</p>
        </div>
      </div>
    </footer>
  );
}

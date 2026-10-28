# README — Logo / assets

> Carpeta: `02_MARCA/logo/`. Última actualización: 2026-10-21.
> Estado: **provisional** (extraídos del `Logo.jpeg` vigente). Pendiente redibujo en **SVG** con la paleta oficial `#0B2D5B`.

## Archivos generados

| Archivo | Uso | Notas |
|---|---|---|
| `logo-club-service.png` | Raster con fondo blanco | Más fiel al original. 1280×981 px. |
| `logo-club-service-transparente.png` | Raster con fondo transparente | Para poner sobre navy o sobre superficies. Requiere ajustar si hay halo blanco. |
| `isotipo-original.png` | Solo símbolo (circular) | Recorte automático del 60% superior del bounding box. Ideal para app, favicon. |
| `wordmark-original.png` | Solo texto "Club Service" | Recorte automático. Úsalo si el símbolo va aparte. |
| `favicon-512.png` | PWA / app icon | Fondo navy `#0B2D5B`, símbolo centrado. |
| `favicon-192.png` | Android/Chrome | Fondo navy. |
| `favicon-32.png` | Tab / .ico | Fondo navy. |
| `logo-mono-navy.png` | Monocromático navy | Para imprimir en B/N o en una sola tinta sobre blanco. |
| `logo-mono-blanco.png` | Monocromático blanco | Para usar **únicamente** sobre fondos oscuros (navy, negro). |

## Reglas rápidas

- **Sitio web:** usar `logo-club-service-transparente.png` en header sobre blanco, o `favicon` solo como `app icon`. Antes de cerrar el diseño, reemplazar por SVG oficial.
- **App de reservas:** usar `isotipo-original.png` en login/splash; evitar el lockup completo en pantallas pequeñas.
- **Tamaños mínimos:** >= 120 px de ancho en digital; >= 25 mm en impreso.
- **Área de reserva:** dejar un espacio igual a la altura de la "C" del isotipo a los cuatro lados.
- **Usos prohibidos:** deformar, rotar, cambiar colores, agregar sombra/contorno, aplicar sobre fondos complejos sin caja.
- **Favicon:** en `club-service-web` usar `favicon-512.png` como `app/favicon.png` y generar `favicon.ico` desde él si se requiere.
- **Paleta:** el logo actual usa tonos distintos a `#0B2D5B`/`#00B894`. Al redibujarlo pasar a la paleta oficial (§2.1 de `05_IDENTIDAD_EMPRESARIAL.md`).

## Pendientes (F3-06 / F3-07)

- [ ] `logo-club-service.svg` (fuente vectorial, monocolor navy + reversible blanco)
- [ ] `logo-club-service-horizontal.svg` (isotipo + wordmark horizontal)
- [ ] `logo-club-service-vertical.svg` (isotipo + wordmark vertical)
- [ ] `manual-basico-uso.md` (tamaños mínimos, área de reserva, ejemplos correctos/incorrectos)
- [ ] Reemplazar los PNG por los SVG en sitio y app cuando estén listos

## Ruta

```text
club_service/02_MARCA/logo/
```

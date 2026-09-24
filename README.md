# Conjunction Ecosystems — sitio web

Sitio de [cjecosystems.com](https://cjecosystems.com). HTML/CSS estático, publicado en Netlify desde este repo.

## Estructura

| Carpeta / archivo | Qué es | ¿Se publica? |
|---|---|---|
| `site/` | El sitio web. Lo que hay acá es lo que ve la gente. | Sí |
| `legacy/` | Copia del sitio original (one-page) y sus imágenes extraídas, como referencia. | No |
| `PRODUCT.md` | Contexto del negocio: audiencias, posicionamiento, contenido real, pendientes. | No |
| `netlify.toml` | Configuración de Netlify (publica solo `site/`). | — |

## Cómo se publica

- **Rama `main`** → producción (cjecosystems.com). Cada push a `main` publica.
- **Otras ramas** (ej. `redesign`) → Netlify genera una URL de preview (`redesign--<sitio>.netlify.app`) sin tocar producción.

Para publicar un cambio: se trabaja en una rama, se revisa la preview y se hace merge a `main`.

## Pendientes de contenido

Ver la sección *Open decisions* en `PRODUCT.md` (Laboraz, CPC, material visual en alta resolución).

# Special Class Tours - Sitio Web

Sitio web moderno y dinámico para Special Class Tours, especialistas en transporte terrestre.

## Estructura del Proyecto

```
SCT/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos, animaciones, responsive
├── js/
│   └── main.js         # Carrusel, navegación, scroll reveal
├── assets/
│   └── Logo-Ok.jpg     # Logo de la empresa
└── docs/
    ├── ESTRUCTURA-PROYECTO.md
    └── DIAGRAMAS-FLUJO.md
```

## Características

- **Diseño moderno** con paleta del logo (negro, amarillo, gris, blanco)
- **Glorieta de fotos** con autoplay, controles y efecto zoom
- **Navegación elegante** con header fijo y menú responsive
- **Animaciones** al hacer scroll (scroll reveal)
- **Totalmente responsive** para móvil, tablet y desktop
- **Enlaces** a WhatsApp, portal de conductores, redes sociales

## Cómo ejecutar

Abre `index.html` en tu navegador o usa un servidor local:

```bash
# Con Python
python -m http.server 8000

# Con Node.js (npx)
npx serve
```

## Personalización

- **Imágenes del Hero**: Edita las URLs en `css/styles.css` (clases `.hero__image--1`, `--2`, `--3`) o usa imágenes locales en `assets/images/`
- **Contacto**: Actualiza el número de WhatsApp en los enlaces `https://wa.me/573209926983`
- **Redes sociales**: Actualiza los href en la sección de contacto y footer

## Documentación

Ver `docs/` para diagramas de flujo y estructura detallada.

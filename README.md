# Joaquín Barreira — Página de presentación online

Este repositorio contiene el código fuente de mi **página de presentación personal**: un sitio web de una sola página donde cuento quién soy, qué sé hacer y en qué proyectos trabajé. Funciona como un CV interactivo, pensado para compartir con reclutadores, profesores o cualquiera que quiera conocer mi perfil.

Está hecho como **sitio estático** con HTML, CSS y JavaScript plano, sin frameworks ni librerías externas, y hosteado en GitHub Pages.

🔗 **Sitio en vivo:** https://joakinkong.github.io/CV-online/

## Qué vas a encontrar en el sitio

- **Inicio**: presentación breve y datos personales.
- **Sobre mí**: quién soy y qué busco.
- **Habilidades**: lenguajes, tecnologías y herramientas que uso, con sus logos.
- **Trayectoria**: educación, logros e idiomas.
- **Proyectos**: una selección de proyectos con descripción, tecnologías usadas y links a repositorio y demo.
- **Contacto**: email, teléfono y GitHub.

La navbar tiene scroll-spy (resalta la sección que estás viendo), y hay botones para cambiar entre modo claro/oscuro y entre español/inglés, ambos con la preferencia guardada en `localStorage`.

## Stack

- HTML, CSS y JavaScript vanilla — sin build step ni dependencias.
- 100% responsive (celular y desktop).
- Hosteado gratis en GitHub Pages.

## Estructura del repo

```
.
├── index.html        # Toda la página: hero, sobre mí, habilidades, trayectoria, proyectos, contacto
├── styles.css        # Estilos
├── script.js         # Toggle de tema + idioma + scroll-spy de la navbar + año del footer
├── assets/           # Imágenes (foto de perfil y capturas de proyectos)
└── README.md
```

## Correrlo en local

Cloná el repositorio y abrí `index.html` con doble clic en el navegador. No necesita servidor ni instalación.

```bash
git clone https://github.com/joakinkong/CV-online.git
```

## Contacto

¿Tenés feedback sobre el sitio o querés hablar de alguno de los proyectos? Escribime a **joakinbarreira@gmail.com** o encontrame en [GitHub](https://github.com/joakinkong).

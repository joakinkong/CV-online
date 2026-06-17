# CV Web — Joaquín Barreira

Currículum web personal hecho como **sitio estático** con HTML, CSS y JavaScript plano (sin frameworks ni librerías externas). Pensado para hostearse en **GitHub Pages**.

🔗 **Sitio en vivo:** https://joakinkong.github.io/CV-online/

## Características

- 📄 **Una sola página (single-page)**: te desplazás entre secciones con scroll, y la navbar lleva a cada sección (Inicio, Sobre mí, Habilidades, Trayectoria, Proyectos, Contacto).
- 🎯 La navbar resalta automáticamente la sección que estás viendo (scroll-spy).
- 🌗 **Modo claro / oscuro** con un botón, recordando la preferencia en `localStorage` (sin destello al cargar).
- 📱 **Responsive**: se adapta a celular y desktop.
- 🎨 Estética minimalista y moderna, tipografía del sistema y buen espaciado.
- 🧩 Habilidades técnicas con sus **logos** y un **footer multi-columna** (marca, enlaces rápidos y contacto).
- ⚡ Sin build step ni dependencias: rutas relativas, se abre con doble clic.

## Estructura

```
.
├── index.html        # Toda la página: hero, sobre mí, habilidades, trayectoria, proyectos, contacto
├── styles.css        # Estilos
├── script.js         # Toggle de tema + scroll-spy de la navbar + año del footer
├── assets/           # Imágenes (foto de perfil y capturas de proyectos)
└── README.md
```

## Cómo verlo en local

Abrí `index.html` con doble clic en el navegador. No necesita servidor ni instalación.

## Cómo personalizarlo

- **Foto de perfil:** colocá tu imagen en `assets/foto-perfil.jpg` (cuadrada, ej. 400×400px). El espacio está marcado con un comentario en `index.html`.
- **Proyectos:** en la sección Proyectos de `index.html` hay 3 tarjetas de ejemplo comentadas. Reemplazá categoría, estado, título, descripción, tecnologías, año, imagen (`assets/proyecto-1.jpg`, etc.) y los links a repositorio y demo.
- **Datos de contacto:** ya están cargados en la sección Contacto de `index.html`.

> Mientras no haya imágenes en `assets/`, se muestran placeholders automáticos.

## Cómo activarlo en GitHub Pages

1. Creá un repositorio en GitHub y subí todos estos archivos a la rama `main`.
   ```bash
   git init
   git add .
   git commit -m "CV web inicial"
   git branch -M main
   git remote add origin https://github.com/joakinkong/NOMBRE-DEL-REPO.git
   git push -u origin main
   ```
2. En GitHub, andá a **Settings → Pages**.
3. En **Source**, elegí la rama `main` y la carpeta `/ (root)`. Guardá.
4. Esperá un minuto y tu CV estará online en:
   `https://joakinkong.github.io/NOMBRE-DEL-REPO/`

> Tip: si nombrás al repositorio `joakinkong.github.io`, el sitio queda directamente en `https://joakinkong.github.io/`.

/* =============================================================
   CV Web — Joaquín Barreira
   Lógica compartida:
     1. Toggle de tema claro/oscuro con persistencia en localStorage
     2. Toggle de idioma español/inglés con persistencia en localStorage
     3. Scroll-spy: resalta en la navbar la sección visible
     4. Año actual en el footer
   -------------------------------------------------------------
   Nota: el tema inicial se aplica con un script inline en el <head>
   (anti-flash). Acá manejamos los botones y la navegación.
   ============================================================= */

(function () {
  'use strict';

  const root = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');

  /* =========================================================
     1. TEMA CLARO / OSCURO
     ========================================================= */

  // Devuelve el tema actualmente aplicado ('light' u 'dark')
  function getCurrentTheme() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  // Actualiza el ícono del botón según el tema activo
  // (🌙 = pasar a oscuro / ☀️ = pasar a claro)
  function updateIcon(theme) {
    if (!toggleBtn) return;
    const icon = toggleBtn.querySelector('.theme-toggle__icon');
    if (icon) {
      icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
    toggleBtn.setAttribute(
      'aria-label',
      theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'
    );
  }

  // Aplica un tema y lo guarda en localStorage
  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      /* localStorage no disponible (modo privado, etc.): ignorar */
    }
    updateIcon(theme);
  }

  // Sincroniza el ícono con el tema ya aplicado por el script inline del <head>
  updateIcon(getCurrentTheme());

  // Click en el botón: alterna entre claro y oscuro
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      const next = getCurrentTheme() === 'dark' ? 'light' : 'dark';
      setTheme(next);
    });
  }

  /* =========================================================
     2. IDIOMA ESPAÑOL / INGLÉS
     ---------------------------------------------------------
     Cada elemento traducible tiene su texto en español como
     contenido por defecto y la versión en inglés en data-en.
     Guardamos el español original en data-es y alternamos.
     ========================================================= */

  const langBtn = document.getElementById('lang-toggle');
  const translatable = Array.prototype.slice.call(
    document.querySelectorAll('[data-en]')
  );

  // Guarda el texto español original de cada elemento (una sola vez)
  translatable.forEach(function (el) {
    el.dataset.es = el.innerHTML;
  });

  // Aplica un idioma ('es' o 'en') a toda la página
  function setLang(lang) {
    translatable.forEach(function (el) {
      el.innerHTML = lang === 'en' ? el.dataset.en : el.dataset.es;
    });
    root.setAttribute('lang', lang);
    try {
      localStorage.setItem('lang', lang);
    } catch (e) {
      /* localStorage no disponible: ignorar */
    }
    // El botón muestra el idioma al que se puede cambiar
    if (langBtn) {
      const label = langBtn.querySelector('.lang-toggle__label');
      if (label) label.textContent = lang === 'en' ? 'ES' : 'EN';
      langBtn.setAttribute(
        'aria-label',
        lang === 'en' ? 'Cambiar a español' : 'Switch to English'
      );
    }
  }

  // Idioma inicial: el guardado o español por defecto
  let savedLang = 'es';
  try {
    savedLang = localStorage.getItem('lang') || 'es';
  } catch (e) {}
  setLang(savedLang);

  // Click en el botón: alterna entre español e inglés
  if (langBtn) {
    langBtn.addEventListener('click', function () {
      const next = root.getAttribute('lang') === 'en' ? 'es' : 'en';
      setLang(next);
    });
  }

  /* =========================================================
     3. SCROLL-SPY: marca el link de la sección visible
     ========================================================= */

  const navLinks = Array.prototype.slice.call(
    document.querySelectorAll('.navbar__links a')
  );

  // Mapa: id de sección -> link de la navbar
  const linkBySection = {};
  navLinks.forEach(function (link) {
    const id = link.getAttribute('href').replace('#', '');
    if (id) linkBySection[id] = link;
  });

  const sections = navLinks
    .map(function (link) {
      return document.getElementById(link.getAttribute('href').replace('#', ''));
    })
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    // Marca un link como activo y desmarca el resto
    function setActive(id) {
      navLinks.forEach(function (link) {
        link.classList.toggle('active', link === linkBySection[id]);
      });
    }

    const observer = new IntersectionObserver(
      function (entries) {
        // Tomamos la sección más visible en pantalla
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        // El margen superior compensa la navbar fija; el inferior
        // hace que la sección se active cuando está hacia la mitad superior.
        rootMargin: '-45% 0px -50% 0px',
        threshold: 0,
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* =========================================================
     4. AÑO DINÁMICO EN EL FOOTER
     ========================================================= */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();

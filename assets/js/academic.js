(() => {
  const menu = document.querySelector('.site-nav');
  const toggle = document.querySelector('.menu-toggle');
  const setMenuOpen = open => {
    menu.dataset.open = String(open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  };

  if (menu && toggle) {
    toggle.addEventListener('click', () => setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    menu.addEventListener('click', event => {
      if (event.target.closest('a')) setMenuOpen(false);
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenuOpen(false);
        toggle.focus();
      }
    });
    window.matchMedia('(min-width: 761px)').addEventListener('change', event => {
      if (event.matches) setMenuOpen(false);
    });

    const links = [...menu.querySelectorAll('a[href^="#"]')];
    const sections = links.map(link => document.getElementById(link.hash.slice(1))).filter(Boolean);
    const updateCurrentSection = () => {
      let current = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 120) current = section;
        else break;
      }
      links.forEach(link => {
        if (current && link.hash === '#' + current.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    };
    let pendingFrame = false;
    const scheduleSectionUpdate = () => {
      if (pendingFrame) return;
      pendingFrame = true;
      requestAnimationFrame(() => {
        pendingFrame = false;
        updateCurrentSection();
      });
    };
    window.addEventListener('scroll', scheduleSectionUpdate, { passive: true });
    window.addEventListener('resize', scheduleSectionUpdate);
    window.addEventListener('hashchange', scheduleSectionUpdate);
    window.addEventListener('load', scheduleSectionUpdate);
    updateCurrentSection();
  }

  const revealHashTarget = () => {
    if (!location.hash) return;
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    const target = document.getElementById(id);
    const details = target?.closest('details');
    if (details && !details.open) {
      details.open = true;
      requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
    }
  };
  window.addEventListener('hashchange', revealHashTarget);
  revealHashTarget();

  const mapDisclosure = document.querySelector('.visitor-map');
  const loadVisitorMap = () => {
    const container = document.getElementById('clustrmaps-container');
    if (!mapDisclosure.open || !container || document.getElementById('clustrmaps')) return;
    const script = document.createElement('script');
    script.id = 'clustrmaps';
    script.src = container.dataset.mapSrc;
    script.async = true;
    container.appendChild(script);
  };
  mapDisclosure?.addEventListener('toggle', loadVisitorMap);
  loadVisitorMap();
})();

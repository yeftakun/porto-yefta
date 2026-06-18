(() => {
  const root = document.documentElement;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const revealElements = Array.from(document.querySelectorAll(".reveal"));

  root.classList.add("animations-ready");

  function showRevealElement(element) {
    element.classList.add("reveal-visible");

    const delay =
      Number.parseFloat(
        getComputedStyle(element).getPropertyValue("--reveal-delay"),
      ) || 0;

    window.setTimeout(() => {
      element.style.removeProperty("--reveal-delay");
    }, delay + 700);
  }

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach(showRevealElement);
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          showRevealElement(entry.target);
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.16,
      },
    );

    revealElements.forEach((element) => revealObserver.observe(element));
  }

  const navItems = Array.from(
    document.querySelectorAll('.nav-link[href^="#"]'),
  )
    .map((link) => {
      const section = document.querySelector(link.getAttribute("href"));
      return section ? { link, section } : null;
    })
    .filter(Boolean);

  function setActiveNav(sectionId) {
    navItems.forEach(({ link, section }) => {
      link.classList.toggle("nav-link-active", section.id === sectionId);
    });
  }

  if (navItems.length > 0) {
    setActiveNav(navItems[0].section.id);
  }

  if ("IntersectionObserver" in window && navItems.length > 0) {
    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-42% 0px -48% 0px",
        threshold: 0,
      },
    );

    navItems.forEach(({ section }) => activeObserver.observe(section));
  } else if (navItems.length > 0) {
    let ticking = false;

    function updateActiveNav() {
      const anchorLine = window.innerHeight * 0.45;
      let activeId = navItems[0].section.id;

      navItems.forEach(({ section }) => {
        if (section.getBoundingClientRect().top <= anchorLine) {
          activeId = section.id;
        }
      });

      setActiveNav(activeId);
      ticking = false;
    }

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(updateActiveNav);
          ticking = true;
        }
      },
      { passive: true },
    );

    updateActiveNav();
  }
})();

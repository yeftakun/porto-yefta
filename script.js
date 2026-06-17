function initializeNavigation() {
  const body = document.body;
  const nav = document.querySelector("#primary-navigation");
  const openButton = document.querySelector(".nav-toggle");
  const closeButton = document.querySelector(".nav-close");
  const overlay = document.querySelector(".nav-overlay");

  if (!nav || !openButton || !closeButton || !overlay) {
    return;
  }

  const navLinks = nav.querySelectorAll("a");
  const mobileNavigation = window.matchMedia("(max-width: 640px)");

  function syncNavigationAccessibility() {
    const isOpen = body.classList.contains("nav-open");

    if (!mobileNavigation.matches) {
      body.classList.remove("nav-open");
      nav.removeAttribute("inert");
      nav.removeAttribute("aria-hidden");
      overlay.hidden = true;
      openButton.setAttribute("aria-expanded", "false");
      return;
    }

    if (isOpen) {
      nav.removeAttribute("inert");
      nav.removeAttribute("aria-hidden");
    } else {
      nav.setAttribute("inert", "");
      nav.setAttribute("aria-hidden", "true");
    }
  }

  function openNavigation() {
    body.classList.add("nav-open");
    openButton.setAttribute("aria-expanded", "true");
    overlay.hidden = false;
    syncNavigationAccessibility();
    closeButton.focus();
  }

  function closeNavigation(restoreFocus = false) {
    body.classList.remove("nav-open");
    openButton.setAttribute("aria-expanded", "false");
    overlay.hidden = true;
    syncNavigationAccessibility();

    if (restoreFocus) {
      openButton.focus();
    }
  }

  openButton.addEventListener("click", openNavigation);
  closeButton.addEventListener("click", () => closeNavigation(true));
  overlay.addEventListener("click", () => closeNavigation(true));
  navLinks.forEach((link) =>
    link.addEventListener("click", () => closeNavigation()),
  );

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && body.classList.contains("nav-open")) {
      closeNavigation(true);
    }
  });

  if (mobileNavigation.addEventListener) {
    mobileNavigation.addEventListener("change", syncNavigationAccessibility);
  } else {
    mobileNavigation.addListener(syncNavigationAccessibility);
  }

  syncNavigationAccessibility();
}

function initializeProjectGalleries() {
  document.querySelectorAll("[data-gallery]").forEach((gallery) => {
    const track = gallery.querySelector(".project-gallery-track");
    const slides = Array.from(gallery.querySelectorAll(".project-gallery-slide"));
    const previousButton = gallery.querySelector("[data-gallery-prev]");
    const nextButton = gallery.querySelector("[data-gallery-next]");
    const dots = Array.from(gallery.querySelectorAll("[data-gallery-dot]"));

    if (!track || slides.length === 0) {
      return;
    }

    let activeIndex = 0;
    let touchStartX = 0;

    function updateGallery(index) {
      activeIndex = (index + slides.length) % slides.length;
      track.style.transform = `translateX(-${activeIndex * 100}%)`;

      slides.forEach((slide, slideIndex) => {
        slide.setAttribute("aria-hidden", String(slideIndex !== activeIndex));
      });

      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("is-active", dotIndex === activeIndex);
        dot.setAttribute("aria-selected", String(dotIndex === activeIndex));
      });
    }

    previousButton?.addEventListener("click", () => updateGallery(activeIndex - 1));
    nextButton?.addEventListener("click", () => updateGallery(activeIndex + 1));
    dots.forEach((dot, dotIndex) => {
      dot.addEventListener("click", () => updateGallery(dotIndex));
    });

    gallery.addEventListener(
      "touchstart",
      (event) => {
        touchStartX = event.touches[0].clientX;
      },
      { passive: true },
    );

    gallery.addEventListener(
      "touchend",
      (event) => {
        const distance = event.changedTouches[0].clientX - touchStartX;

        if (Math.abs(distance) < 40) {
          return;
        }

        updateGallery(activeIndex + (distance < 0 ? 1 : -1));
      },
      { passive: true },
    );

    updateGallery(0);
  });
}

initializeNavigation();
initializeProjectGalleries();

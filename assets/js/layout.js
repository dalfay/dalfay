(function() {
  "use strict";

  const sharedContact = {
    address1: "3275 Stevens Creek Blvd, Suite 350",
    address2: "San Jose, CA 95117",
    email: "info@dalfay.com",
    sales: "sales@dalfay.com"
  };

  const pages = {
    home: {
      headerNav: [
        { href: "#hero", label: "Home", active: true },
        { href: "#story", label: "Our Story" },
        { href: "#services", label: "Services" },
        { href: "#process", label: "How It Works" },
        { href: "#coverage", label: "Coverage" }
      ],
      footerCta: {
        title: "Start with a consultation and build the right vehicle solution from there.",
        text: "Dalfay is built for customers who want a serious partner, not a generic website. Explore the service line that fits your needs and move forward with confidence.",
        buttons: [
          { href: "/b2b-imports/", label: "B2B Imports", className: "btn-main" },
          { href: "/personal-exports/", label: "Personal Export", className: "btn-outline-main footer-alt-btn" }
        ]
      },
      footerNavTitle: "Navigate",
      footerNav: [
        { href: "#hero", label: "Home" },
        { href: "#story", label: "Our Story" },
        { href: "#services", label: "Services" },
        { href: "#coverage", label: "Coverage" }
      ],
      footerLinksTitle: "Core Services",
      footerLinks: [
        { href: "/b2b-imports/", label: "Import Solutions for Overseas Businesses" },
        { href: "/personal-exports/", label: "Personal Export Solutions" },
        { href: "/us-brokerage/", label: "U.S. Vehicle Brokerage" }
      ]
    },
    b2b: {
      headerNav: [
        { href: "/#hero", label: "Home" },
        { href: "/#story", label: "Our Story" },
        { href: "/#services", label: "Services", active: true },
        { href: "/#process", label: "How It Works" },
        { href: "/#coverage", label: "Coverage" }
      ],
      footerCta: {
        title: "Build a dependable import relationship with Dalfay.",
        text: "If your business needs a serious U.S. sourcing and export partner, start with a consultation and let us understand your market properly.",
        buttons: [
          { href: "#consultation", label: "Request Consultation", className: "btn-main" },
          { href: "/", label: "Back to Home", className: "btn-outline-main footer-alt-btn" }
        ]
      },
      footerNavTitle: "Navigate",
      footerNav: [
        { href: "/", label: "Home" },
        { href: "#overview", label: "B2B Imports" },
        { href: "#process", label: "How It Works" },
        { href: "#consultation", label: "Consultation" }
      ],
      footerLinksTitle: "Other Services",
      footerLinks: [
        { href: "/personal-exports/", label: "Personal Export Solutions" },
        { href: "/us-brokerage/", label: "U.S. Vehicle Brokerage" },
        { href: "/#coverage", label: "Coverage" }
      ]
    },
    personal: {
      headerNav: [
        { href: "/#hero", label: "Home" },
        { href: "/#story", label: "Our Story" },
        { href: "/#services", label: "Services", active: true },
        { href: "/#process", label: "How It Works" },
        { href: "/#coverage", label: "Coverage" }
      ],
      footerCta: {
        title: "Start with a consultation and export the vehicle the right way.",
        text: "If you are sending a car to loved ones abroad or still need help finding the right one, start with a direct conversation and build the right plan from there.",
        buttons: [
          { href: "#consultation", label: "Request Consultation", className: "btn-main" },
          { href: "/", label: "Back to Home", className: "btn-outline-main footer-alt-btn" }
        ]
      },
      footerNavTitle: "Navigate",
      footerNav: [
        { href: "/", label: "Home" },
        { href: "#overview", label: "Personal Export" },
        { href: "#process", label: "How It Works" },
        { href: "#consultation", label: "Consultation" }
      ],
      footerLinksTitle: "Other Services",
      footerLinks: [
        { href: "/b2b-imports/", label: "Import Solutions for Overseas Businesses" },
        { href: "/us-brokerage/", label: "U.S. Vehicle Brokerage" },
        { href: "/#coverage", label: "Coverage" }
      ]
    },
    us: {
      headerNav: [
        { href: "/#hero", label: "Home" },
        { href: "/#story", label: "Our Story" },
        { href: "/#services", label: "Services", active: true },
        { href: "/#process", label: "How It Works" },
        { href: "/#coverage", label: "Coverage" }
      ],
      footerCta: {
        title: "Start with a consultation and buy with a clearer plan.",
        text: "Dalfay helps individuals and small businesses source, secure, and deliver vehicles in the United States through a guided brokerage process.",
        buttons: [
          { href: "/#services", label: "Explore Services", className: "btn-main" },
          { href: "/", label: "Back to Home", className: "btn-outline-main footer-alt-btn" }
        ]
      },
      footerNavTitle: "Navigate",
      footerNav: [
        { href: "/", label: "Home" },
        { href: "#overview", label: "Overview" },
        { href: "#process", label: "How It Works" },
        { href: "#delivery-options", label: "Delivery Options" }
      ],
      footerLinksTitle: "Other Services",
      footerLinks: [
        { href: "/b2b-imports/", label: "Import Solutions for Overseas Businesses" },
        { href: "/personal-exports/", label: "Personal Export Solutions" },
        { href: "/#coverage", label: "Coverage" }
      ]
    }
  };

  function renderNavItems(items) {
    return items.map((item) => `<li><a href="${item.href}"${item.active ? ' class="active"' : ""}>${item.label}</a></li>`).join("");
  }

  function renderFooterLinks(items) {
    return items.map((item) => `<li><i class="bi bi-chevron-right"></i> <a href="${item.href}">${item.label}</a></li>`).join("");
  }

  function renderFooterButtons(items) {
    return items.map((item) => `<a href="${item.href}" class="${item.className}">${item.label}</a>`).join("");
  }

  function renderHeader(config) {
    return `
  <header id="header" class="header">
    <div class="branding d-flex align-items-center">
      <div class="container position-relative d-flex align-items-center justify-content-between">
        <a href="/" class="logo">
          <img src="/assets/img/logo.jpg" alt="Dalfay Logo">
        </a>

        <nav id="navmenu" class="navmenu d-none d-xl-block">
          <ul>
            ${renderNavItems(config.headerNav)}
          </ul>
        </nav>

        <button type="button" class="mobile-menu-toggle d-xl-none" aria-expanded="false" aria-controls="mobile-menu-overlay" aria-label="Open menu">
          <i class="bi bi-list"></i>
        </button>
      </div>
    </div>
  </header>`;
  }

  function renderMobileMenu(config) {
    return `
  <div id="mobile-menu-overlay" class="mobile-menu-overlay d-xl-none" aria-hidden="true">
    <div class="mobile-menu-panel">
      <div class="mobile-menu-header">
        <a href="/" class="logo">
          <img src="/assets/img/logo.jpg" alt="Dalfay Logo">
        </a>
        <button type="button" class="mobile-menu-close" aria-label="Close menu">
          <i class="bi bi-x"></i>
        </button>
      </div>

      <nav class="mobile-menu-nav" aria-label="Mobile Navigation">
        <ul>
          ${renderNavItems(config.headerNav)}
        </ul>
      </nav>
    </div>
  </div>`;
  }

  function renderFooter(config) {
    return `
  <footer id="footer" class="footer">
    <div class="footer-cta">
      <div class="container">
        <div class="row align-items-center gy-4">
          <div class="col-lg-8">
            <h3>${config.footerCta.title}</h3>
            <p>
              ${config.footerCta.text}
            </p>
          </div>
          <div class="col-lg-4 d-flex justify-content-lg-end">
            <div class="d-flex flex-wrap gap-2">
              ${renderFooterButtons(config.footerCta.buttons)}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-about">
          <h4>Contact Us</h4>
          <div class="footer-contact pt-4">
            <p>${sharedContact.address1}</p>
            <p>${sharedContact.address2}</p>
            <p class="mt-3"><strong>Email:</strong> <span>${sharedContact.email}</span></p>
            <p><strong>Sales:</strong> <span>${sharedContact.sales}</span></p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 footer-links">
          <h4>${config.footerNavTitle}</h4>
          <ul>
            ${renderFooterLinks(config.footerNav)}
          </ul>
        </div>

        <div class="col-lg-4 col-md-6 footer-links">
          <h4>${config.footerLinksTitle}</h4>
          <ul>
            ${renderFooterLinks(config.footerLinks)}
          </ul>
        </div>
      </div>
    </div>

    <div class="container copyright text-center">
      <p>© <span>Copyright</span> <strong class="px-1">Dalfay LLC (formerly uProximo LLC)</strong> <span>All Rights Reserved</span></p>
    </div>
  </footer>`;
  }

  const pageKey = document.body.dataset.page;
  const config = pages[pageKey];

  if (!config) {
    return;
  }

  const headerMount = document.querySelector("#site-header");
  const footerMount = document.querySelector("#site-footer");

  if (headerMount) {
    headerMount.outerHTML = renderHeader(config);
  }

  document.body.insertAdjacentHTML("afterbegin", renderMobileMenu(config));

  if (footerMount) {
    footerMount.outerHTML = renderFooter(config);
  }

  const body = document.body;
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mobileMenuClose = document.querySelector(".mobile-menu-close");
  const mobileMenuOverlay = document.querySelector("#mobile-menu-overlay");

  if (body && mobileMenuToggle && mobileMenuClose && mobileMenuOverlay) {
    const setMobileMenuState = (isOpen) => {
      body.classList.toggle("mobile-menu-open", isOpen);
      mobileMenuOverlay.classList.toggle("is-open", isOpen);
      mobileMenuOverlay.setAttribute("aria-hidden", isOpen ? "false" : "true");
      mobileMenuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    };

    mobileMenuToggle.addEventListener("click", () => setMobileMenuState(true));
    mobileMenuClose.addEventListener("click", () => setMobileMenuState(false));
    mobileMenuOverlay.addEventListener("click", (event) => {
      if (event.target === mobileMenuOverlay) {
        setMobileMenuState(false);
      }
    });
    document.querySelectorAll(".mobile-menu-nav a").forEach((link) => {
      link.addEventListener("click", () => setMobileMenuState(false));
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && body.classList.contains("mobile-menu-open")) {
        setMobileMenuState(false);
      }
    });
  }
})();

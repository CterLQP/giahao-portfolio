"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { lang, changeLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NAV_LINKS = [
    { label: t.nav_about, href: "#about" },
    { label: t.nav_experience, href: "#experience" },
    { label: t.nav_certifications, href: "#certifications" },
    { label: t.nav_projects, href: "#projects" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({ top: target.offsetTop - 72, behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <a
          href="#"
          className="nav-logo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Gia&nbsp;<span>Hao</span>
        </a>

        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <div className="lang-switcher">
            {["vi", "en", "fr"].map((l) => (
              <button
                key={l}
                className={lang === l ? "active" : ""}
                onClick={() => changeLanguage(l)}
                aria-label={`Switch language to ${l}`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            className="nav-cta"
            onClick={(e) => scrollToSection(e, "#contact")}
          >
            {t.nav_contact}
          </a>

          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

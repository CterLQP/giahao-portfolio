"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Sparkles, PenLine, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const PORTRAIT_SRC =
  "https://res.cloudinary.com/dd7gti2kn/image/upload/v1751001518/samples/people/Giaohao/giahao_1_h731cm.jpg";

export default function Hero() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({ top: target.offsetTop - 72, behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-inner">
          {/* Text */}
          <div
            className={`hero-text fade-in-up ${mounted ? "visible" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <span className="section-eyebrow">{t.hero_eyebrow}</span>
            <h1 className="hero-title">
              {t.hero_hello}
              <br />
              <em>Gia Hảo Trương</em>
            </h1>
            <p className="hero-role">{t.hero_role}</p>
            <p className="hero-tagline">{t.hero_tagline}</p>
            <div className="hero-actions">
              <a
                href="#projects"
                className="btn-primary"
                onClick={(e) => scrollToSection(e, "#projects")}
              >
                {t.hero_cta_projects}
              </a>
              <a
                href="#contact"
                className="btn-ghost"
                onClick={(e) => scrollToSection(e, "#contact")}
              >
                {t.hero_cta_contact}
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div
            className={`hero-visual fade-in-up ${mounted ? "visible" : ""}`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="hero-ring" aria-hidden="true" />
            <div className="hero-portrait">
              <Image
                src={PORTRAIT_SRC}
                alt="Gia Hảo Trương"
                width={680}
                height={850}
                preload={true}
              />
            </div>
            <div className="hero-badge badge-1">
              <Sparkles size={16} />
              {t.hero_badge1}
            </div>
            <div className="hero-badge badge-2">
              <PenLine size={16} />
              {t.hero_badge2}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="hero-scroll"
        onClick={(e) => scrollToSection(e, "#about")}
      >
        {t.hero_scroll}
        <ChevronDown size={18} />
      </a>
    </section>
  );
}

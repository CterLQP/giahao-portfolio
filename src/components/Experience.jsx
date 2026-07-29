"use client";

import { useEffect, useRef } from "react";
import { TrendingUp, Megaphone, Store } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current
      ?.querySelectorAll(".fade-in-up")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const ITEMS = [
    { icon: <Store size={22} />, title: t.exp3_title, subtitle: t.exp3_subtitle },
    { icon: <Megaphone size={22} />, title: t.exp2_title, subtitle: t.exp2_subtitle },
    { icon: <TrendingUp size={22} />, title: t.exp1_title, subtitle: t.exp1_subtitle },
  ];

  return (
    <section id="experience" ref={sectionRef}>
      <div className="container">
        <div className="section-head fade-in-up">
          <span className="section-eyebrow">{t.experience_eyebrow}</span>
          <h2 className="section-title">{t.experience_title}</h2>
        </div>

        <div className="timeline">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              className="timeline-item fade-in-up"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <span className="timeline-dot" aria-hidden="true" />
              <div className="timeline-card">
                <div className="timeline-icon">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p className="card-sub-heading">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const SKILLS = [
  "Digital Marketing",
  "Content Creation",
  "SEO",
  "Market Research",
  "Social Media",
];

export default function About() {
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
      ?.querySelectorAll(".fade-in-up, .fade-in")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    const target = document.getElementById("contact");
    if (target) {
      window.scrollTo({ top: target.offsetTop - 72, behavior: "smooth" });
    }
  };

  return (
    <section id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-photo-wrap fade-in">
            <div className="about-photo">
              <Image
                src="https://res.cloudinary.com/dd7gti2kn/image/upload/v1751001518/samples/people/Giaohao/giahao_1_h731cm.jpg"
                alt="Gia Hảo Trương"
                width={640}
                height={640}
              />
            </div>
          </div>

          <div className="about-content fade-in-up">
            <span className="section-eyebrow">{t.about_eyebrow}</span>
            <h2>Gia Hảo Trương</h2>
            <p className="about-subtitle">{t.about_subtitle}</p>
            <p>{t.about_desc}</p>
            <div className="skills-container">
              {SKILLS.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
            <a href="#contact" className="btn-primary" onClick={scrollToContact}>
              {t.about_cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

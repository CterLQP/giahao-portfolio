"use client";

import { useEffect, useRef } from "react";
import { Award, BarChart3, Search, Users, MonitorCheck, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Certifications() {
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

  const CERTS = [
    {
      icon: <Award size={24} />,
      title: t.cert1_title,
      href: "https://drive.google.com/file/d/1RdGsuMcJVyOJ-fnQFEYagbW110Cs7Tk_/view?usp=sharing",
    },
    {
      icon: <BarChart3 size={24} />,
      title: t.cert2_title,
      href: "https://drive.google.com/file/d/1gskAUFxa6-CWboKQQcc3yEBkpB94zzWu/view?usp=sharing",
    },
    {
      icon: <Search size={24} />,
      title: t.cert3_title,
      href: "https://drive.google.com/file/d/18R4vYXlhBmrCYTcBk0rpa4E12zoGQgRO/view?usp=sharing",
    },
    {
      icon: <Users size={24} />,
      title: t.cert4_title,
      href: "https://drive.google.com/file/d/1w6I19gBdCgi3WXFfWw5P-LKU32YAaB7B/view?usp=sharing",
    },
    {
      icon: <MonitorCheck size={24} />,
      title: t.cert5_title,
      href: "https://www.tosa.org/EN/Index?param=WDl5MXkxWVVWOTlMMGFHU0xpQ2dERjBweDJtU3R5cVhmbHBWcFNaa2dNbTFVU2FBTUljV0srMXpzQkpmOW55UUxyb3Jnc3hMeU9STXc3TWNpVkExdGc9PTo6TSl4n9K-qTEVqIN0sLTDlg",
    },
  ];

  return (
    <section id="certifications" ref={sectionRef}>
      <div className="container">
        <div className="section-head fade-in-up">
          <span className="section-eyebrow">{t.certifications_eyebrow}</span>
          <h2 className="section-title">{t.certifications_title}</h2>
        </div>

        <div className="cert-grid">
          {CERTS.map((cert, i) => (
            <div
              key={cert.title}
              className="cert-card fade-in-up"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="cert-icon">{cert.icon}</div>
              <h3>{cert.title}</h3>
              <a
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link-btn"
              >
                {t.view_certificate}
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { Mail, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const LinkedinIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function ContactFooter() {
  const { t } = useLanguage();
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="contact">
        <div className="container fade-in-up" ref={containerRef}>
          <span className="section-eyebrow">{t.contact_eyebrow}</span>
          <h2 className="section-title">{t.contact_title}</h2>
          <p className="contact-text">{t.contact_desc}</p>

          <div className="contact-info-grid">
            <a href="mailto:haochi1802@gmail.com" className="contact-item">
              <Mail size={18} />
              <span>haochi1802@gmail.com</span>
            </a>
            <a href="tel:+33625271101" className="contact-item">
              <Phone size={18} />
              <span>+33 6 25 27 11 01</span>
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/gia-hao-truong-485a94329"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100039232884138"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon size={20} />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>{t.footer_text}</p>
      </footer>
    </>
  );
}

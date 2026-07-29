"use client";

import { useEffect, useRef, useState } from "react";
import { FileText, ArrowRight, Clapperboard } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { projectsData } from "@/data/translations";
import Modal from "./Modal";

/* Gradient shown behind each thumb — becomes the fallback if the image fails */
const GRADIENTS = ["g1", "g2", "g3", "g4"];
const gradientFor = (id) =>
  GRADIENTS[
    Math.abs([...id].reduce((a, c) => a + c.charCodeAt(0), 0)) % GRADIENTS.length
  ];

const SOCIAL_IDS = ["social_toxic", "social_lighthouse", "social_scars"];
const VIDEO_IDS = [
  "video_intro",
  "video_fashion",
  "video_kedge",
  "video_recruitment_1",
  "video_recruitment_2",
  "video_workshop_ct",
  "video_recruitment_vn",
];
const RESEARCH_IDS = ["research_report", "research_canva_analysis", "research_ira_report"];

function Thumb({ id, icon }) {
  const thumb = projectsData[id].thumb;
  const hasImage = thumb && !thumb.includes("placehold.co");
  return (
    <div className="project-thumb">
      <div className={`thumb-gradient ${gradientFor(id)}`}>{icon}</div>
      {hasImage && (
        <div
          className="bg-image"
          style={{ backgroundImage: `url(${thumb})` }}
        />
      )}
      <div className="play-overlay">
        <span className="play-circle">{icon}</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.05 }
    );
    sectionRef.current
      ?.querySelectorAll(".fade-in-up")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const openModal = (projectId) => {
    setActiveProject(projectId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setActiveProject(null), 300);
  };

  return (
    <section id="projects" ref={sectionRef}>
      <div className="container">
        <div className="section-head fade-in-up">
          <span className="section-eyebrow">{t.projects_eyebrow}</span>
          <h2 className="section-title">{t.projects_title}</h2>
        </div>

        {/* Social Media Content */}
        <div className="project-category fade-in-up">
          <h3 className="project-category-title">{t.projects_cat1_title}</h3>
          <div className="projects-grid">
            {SOCIAL_IDS.map((id) => (
              <div key={id} className="project-card" onClick={() => openModal(id)}>
                <Thumb id={id} icon={<FileText size={22} />} />
                <div className="project-card-content">
                  <h3>{t[projectsData[id].keyTitle]}</h3>
                  <p className="project-card-desc">{t[projectsData[id].keyDesc]}</p>
                  <span className="view-project-btn">
                    {t.view_post}
                    <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Videos */}
        <div className="project-category fade-in-up">
          <h3 className="project-category-title">{t.projects_cat2_title}</h3>
          <div className="projects-grid">
            {VIDEO_IDS.map((id) => (
              <div key={id} className="project-card" onClick={() => openModal(id)}>
                <Thumb id={id} icon={<Clapperboard size={26} />} />
                <div className="project-card-content">
                  <h3>{t[projectsData[id].keyTitle]}</h3>
                  <span className="view-project-btn">
                    {t.view_video}
                    <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research */}
        <div className="project-category fade-in-up">
          <h3 className="project-category-title">{t.projects_cat3_title}</h3>
          <div className="projects-grid">
            {RESEARCH_IDS.map((id) => (
              <div key={id} className="project-card" onClick={() => openModal(id)}>
                <Thumb id={id} icon={<FileText size={24} />} />
                <div className="project-card-content">
                  <h3>{t[projectsData[id].keyTitle]}</h3>
                  <span className="view-project-btn">
                    {t.view_research}
                    <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} activeProject={activeProject} />
    </section>
  );
}

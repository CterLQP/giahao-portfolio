"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X, Microscope, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { projectsData } from "@/data/translations";

export default function Modal({ isOpen, onClose, activeProject }) {
  const { lang, t } = useLanguage();
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
      if (videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) onClose();
  };

  if (!isOpen || !activeProject) return null;

  const project = projectsData[activeProject];
  if (!project) return null;

  const type = project.type;
  const langData = project[lang] || project["en"] || {};

  return (
    <div
      className="modal-overlay"
      onClick={handleOverlayClick}
      style={{ visibility: isOpen ? "visible" : "hidden", opacity: isOpen ? 1 : 0 }}
    >
      <div className="modal-container">
        <button className="modal-close" aria-label="Close modal" onClick={onClose}>
          <X size={20} />
        </button>

        {type === "social" && (
          <div className="modal-content-area">
            <div className="post-header">
              <span className="post-avatar">GH</span>
              <span className="post-author">{langData.author}</span>
            </div>
            <h3 className="post-title">{langData.title}</h3>
            <p className="post-content" style={{ whiteSpace: "pre-line" }}>
              {langData.content}
            </p>
            <Image
              src={langData.image}
              alt={langData.title || "Social Post"}
              className="post-image"
              width={640}
              height={480}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        )}

        {type === "video" && (
          <div className="modal-content-area">
            <div className="modal-video-header">
              <h3>{t[project.keyTitle]}</h3>
            </div>
            <div className="video-wrapper">
              <video controls controlsList="nodownload" ref={videoRef} autoPlay>
                <source src={project.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        {type === "research" && (
          <div className="modal-content-area">
            <div className="research-header">
              <div className="research-header-icon">
                <Microscope size={24} />
              </div>
              <h3>{langData.title}</h3>
            </div>
            <p>{langData.description}</p>
            <a
              href={langData.link}
              className="research-link-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{t.view_full_research}</span>
              <ExternalLink size={16} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

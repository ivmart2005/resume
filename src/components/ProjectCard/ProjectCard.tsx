import React, { useState } from 'react';
import './ProjectCard.css';

interface ProjectProps {
  title: string;
  description: string;
  images: string[];
  imageDescriptions?: string[];
  className?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, images, imageDescriptions, className }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const headerBg = `${import.meta.env.BASE_URL}images/header-background.jpg`;

  const toggleExpand = () => {
    if (window.innerWidth >= 768) {
      setIsExpanded(!isExpanded);
    }
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const currentDescription = (imageDescriptions && imageDescriptions[currentImgIndex])
    ? imageDescriptions[currentImgIndex]
    : description;

  const infoStyle = className === 'floral-special'
    ? { backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.2) 0%, transparent 40%), url(${headerBg})` }
    : {};

  return (
    <div className={`project-card ${className || ''} ${isExpanded ? 'expanded' : ''}`}>
      <div className="project-visual" onClick={toggleExpand}>
        
        {images.length > 1 && (
          <div className="slider-nav">
            <button className="nav-arrow prev" onClick={prevSlide} aria-label="Previous"></button>
            <button className="nav-arrow next" onClick={nextSlide} aria-label="Next"></button>
          </div>
        )}

        <img
          src={images[currentImgIndex]}
          alt={`${title} - image ${currentImgIndex + 1}`}
          className="project-img"
          loading="lazy"
        />
      </div>
      
      <div className="project-info" style={infoStyle}>
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{currentDescription}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
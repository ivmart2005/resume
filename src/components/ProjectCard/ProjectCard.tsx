import React, { useState } from 'react';
import './ProjectCard.css';

interface ProjectProps {
  title: string;
  description: string;
  images: string[];
  className?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, images, className }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const headerBg = `${import.meta.env.BASE_URL}images/header-background.jpg`;

  const toggleExpand = () => {
    if (window.innerWidth >= 768) {
      setIsExpanded(!isExpanded);
    }
  };

  const infoStyle = className === 'floral-special' 
    ? { backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.2) 0%, transparent 40%), url(${headerBg})` } 
    : {};

  return (
    <div className={`project-card ${className || ''} ${isExpanded ? 'expanded' : ''}`}>
      <div className="project-visual" onClick={toggleExpand}>
        <img src={images[0]} alt={title} className="project-img" />
      </div>
      <div className="project-info" style={infoStyle}>
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
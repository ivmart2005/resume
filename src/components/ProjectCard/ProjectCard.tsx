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

  const toggleExpand = () => {
    if (window.innerWidth >= 768) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className={`project-card ${className || ''} ${isExpanded ? 'expanded' : ''}`}>
      <div className="project-visual" onClick={toggleExpand}>
        <img src={images[0]} alt={title} className="project-img" />
      </div>
      <div className="project-info">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
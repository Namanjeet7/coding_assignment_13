import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, primary, hovered, pressed, children, onClick }) => {
  let className = "";
  if (primary) className += "project-card-primary";
  if (hovered) className += "project-card-hovered";
  if (pressed) className += "project-card-pressed";

  return (
    <div className={className} onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </div>
  );
};

export default ProjectCard;

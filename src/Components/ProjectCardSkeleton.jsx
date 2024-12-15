import React from 'react';

function ProjectCardSkeleton() {
  return (
    <div className="ProjectCard skeleton">
      <div className="ProjectCardContent skeleton-image"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-badges"></div>
      <div className="skeleton-link"></div>
    </div>
  );
}

export default ProjectCardSkeleton; 
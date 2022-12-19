import React, { useContext } from 'react';

import { ProjectState } from '../../../store/slices/projectSlice';
import { ProjectContext } from '../../Dashboard/Dashboard';
import { ProjectsListItem } from '../ProjectsListItem/ProjectsListItem';

import './ProjectsList.styles.scss';

export const ProjectsList: React.FC = () => {
  const { projectsList } = useContext(ProjectContext);

  return (
    <div className="ProjectsList">
      {projectsList.map((project: ProjectState) => (
        <ProjectsListItem key={project.id} item={project} />
      ))}
    </div>

  );
};


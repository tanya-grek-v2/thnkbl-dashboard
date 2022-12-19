import React from 'react';
import { Layout } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from '../Header/Header';
import { ProjectsList } from '../Projects/ProjectsList/ProjectsList';
import {
  addNewProject,
  ProjectState,
  selectProject,
  selectProjectsAmount,
} from '../../store/slices/projectSlice';

import './Dashboard.styles.scss';

interface ContextState {
  projectsList: ProjectState[],
  handleAddNew: React.MouseEventHandler<HTMLElement> | undefined,
}
export const ProjectContext = React.createContext({} as ContextState);

export const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  const itemsAmount = useSelector(selectProjectsAmount);
  const items = useSelector(selectProject);

  const handleAddNew = () => {
    const timestamp = new Date().toISOString();

    dispatch(addNewProject({
      title: '',
      id: timestamp,
      updatedAt: timestamp,
    }));
  };

  return (
    <ProjectContext.Provider value={{
      projectsList: items,
      handleAddNew,
    }}>
      <Layout>
        <Header />
        {itemsAmount ? (
          <div className="content">
            <ProjectsList />
          </div>
        ) : null}
      </Layout>
    </ProjectContext.Provider>
  );
};


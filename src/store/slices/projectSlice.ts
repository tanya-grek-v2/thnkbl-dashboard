import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface ProjectState {
  id: string,
  title: string,
  updatedAt: string,
}

interface ProjectsState {
  projects: ProjectState[],
}

const initialState: ProjectsState = {
  projects: [],
};

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    addNewProject: (state, action: PayloadAction<ProjectState>) => {
      if (state.projects.some(({ title }) => title === '')) {
        return;
      } else {
        state.projects = [ ...state.projects, action.payload ];
      }
    },
    editProject: (state, action: PayloadAction<ProjectState>) => {
      const projectIdx = state.projects.findIndex((project) => project.id === action.payload.id);

      state.projects[projectIdx] = {
        ...action.payload,
        updatedAt: new Date().toISOString(),
      };
    },
    deleteProject: (state, action: PayloadAction<ProjectState>) => {
      state.projects = state.projects.filter(project => project.id !== action.payload.id);
    },
  },
});

export const { addNewProject, editProject, deleteProject } = projectSlice.actions;

export const selectProject = (state: RootState) => state.projects.projects;
export const selectProjectsAmount = (state: RootState) => state.projects.projects.length;

export default projectSlice.reducer;

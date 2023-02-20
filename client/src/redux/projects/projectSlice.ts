import { IProject } from "./../../@types/project";
import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import {
  getAllProjects,
  createProject,
  getOneProject,
  removeProject,
  updateProject,
} from "./projectActions";
import { createTask, getOneTask, removeTask } from "./taskAction";
import { ITask } from "../../@types/task";
export interface IProjectState {
  projects: IProject[];
  project?: IProject;
  isLoading: boolean;
  message: string | null;
  task?: ITask;
}

const initialState: IProjectState = {
  isLoading: false,
  projects: [],
  project: {
    name: "",
    description: "",
    createdAt: "",
    updatedAt: "",
    user: {
      name: "",
      email: "",
    },
    tasks: [],
  },
  task: {},
  message: "",
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    removeSingleProject: (state: IProjectState) => {
      state.project = initialState?.project;
    },
    removeSingleTask: (state: IProjectState) => {
      state.task = initialState?.task;
    },

    clearMessage: (state: IProjectState) => {
      state.message = "";
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IProjectState>) => {
    builder.addCase(getAllProjects.pending, (state: IProjectState) => {
      state.isLoading = true;
    });
    builder.addCase(
      getAllProjects.fulfilled,
      (state: IProjectState, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.projects = action?.payload?.data;
      }
    );
    builder.addCase(
      getAllProjects.rejected,
      (state: IProjectState, action: PayloadAction<any>) => {
        state.isLoading = false;
      }
    );

    builder.addCase(getOneProject.pending, (state: IProjectState) => {
      state.isLoading = true;
    });
    builder.addCase(
      getOneProject.fulfilled,
      (state: IProjectState, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.project = action?.payload?.data;
      }
    );
    builder.addCase(
      getOneProject.rejected,
      (state: IProjectState, action: PayloadAction<any>) => {
        state.isLoading = false;
      }
    );

    builder.addCase(createProject.pending, (state: IProjectState) => {
      state.isLoading = true;
    });
    builder.addCase(
      createProject.fulfilled,
      (state: IProjectState, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.message = action?.payload?.message;
      }
    );
    builder.addCase(
      createProject.rejected,
      (state: IProjectState, action: PayloadAction<any>) => {
        state.isLoading = false;
      }
    );

    builder.addCase(createTask.pending, (state: IProjectState) => {
      state.isLoading = true;
    });
    builder.addCase(
      createTask.fulfilled,
      (state: IProjectState, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.message = action?.payload?.message;
      }
    );
    builder.addCase(
      createTask.rejected,
      (state: IProjectState, action: PayloadAction<any>) => {
        state.isLoading = false;
      }
    );

    builder.addCase(removeTask.pending, (state: IProjectState) => {
      state.isLoading = true;
    });
    builder.addCase(
      removeTask.fulfilled,
      (state: IProjectState, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.message = action?.payload?.message;
      }
    );
    builder.addCase(
      removeTask.rejected,
      (state: IProjectState, action: PayloadAction<any>) => {
        state.isLoading = false;
      }
    );

    builder.addCase(getOneTask.pending, (state: IProjectState) => {
      state.isLoading = true;
    });
    builder.addCase(
      getOneTask.fulfilled,
      (state: IProjectState, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.task = action?.payload?.data;
      }
    );
    builder.addCase(
      getOneTask.rejected,
      (state: IProjectState, action: PayloadAction<any>) => {
        state.isLoading = false;
      }
    );

    builder.addCase(updateProject.pending, (state: IProjectState) => {
      state.isLoading = true;
    });
    builder.addCase(
      updateProject.fulfilled,
      (state: IProjectState, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.message = action?.payload?.message;
      }
    );
    builder.addCase(
      updateProject.rejected,
      (state: IProjectState, action: PayloadAction<any>) => {
        state.isLoading = false;
      }
    );

    builder.addCase(removeProject.pending, (state: IProjectState) => {
      state.isLoading = true;
    });
    builder.addCase(
      removeProject.fulfilled,
      (state: IProjectState, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.message = action?.payload?.message;
      }
    );
    builder.addCase(
      removeProject.rejected,
      (state: IProjectState, action: PayloadAction<any>) => {
        state.isLoading = false;
      }
    );
  },
});

export const getProjects = (state: { project: IProjectState }) =>
  state.project.projects;

export const getProject = (state: { project: IProjectState }) =>
  state.project.project;

export const getTask = (state: { project: IProjectState }) =>
  state.project.task;

export const getMessage = (state: { project: IProjectState }): string | null =>
  state.project.message;

export const { removeSingleProject, clearMessage, removeSingleTask } = projectSlice.actions;

export default projectSlice.reducer;

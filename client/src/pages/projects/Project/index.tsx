import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneProject } from "../../../redux/projects/projectActions";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import {
  getProject,
  removeSingleProject,
} from "../../../redux/projects/projectSlice";
import { Container } from "./styles";
import { ProjectSection } from "./components/ProjectSection";
import { TaskSection } from "./components/TaskSection";

export const Project = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const project = useSelector(getProject);
  const { id } = useParams();

  const getOne = () => {
    dispatch(getOneProject(id!));
  };
  useEffect(() => {
    getOne();
    return () => {
      dispatch(removeSingleProject);
    };
  }, [id]);

  return (
    <Container align="center" justify="center" direction="column">
      {project && (
        <>
          <ProjectSection onActionProject={getOne} />
          <TaskSection onActionTask={getOne} />
        </>
      )}
    </Container>
  );
};

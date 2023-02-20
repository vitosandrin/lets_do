import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, TextArea } from "../../../../../components";
import {
  getProject,
  getTask,
  removeSingleTask,
} from "../../../../../redux/projects/projectSlice";
import {
  getOneTask,
  updateTask,
} from "../../../../../redux/projects/taskAction";
import { theme } from "../../../../../theme";
import { Container, ContainerData, Paragraph, Text } from "./styles";

export const TaskDetail = ({
  taskId,
  onActionTask,
}: {
  taskId: string;
  onActionTask: () => void | void;
}) => {
  const project = useSelector(getProject);
  const task = useSelector(getTask);
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();

  const getOne = async () => {
    await dispatch(getOneTask({ project: project?._id!, task: taskId! }));
  };

  useEffect(() => {
    getOne();
    return () => {
      dispatch(removeSingleTask);
    };
  }, [project?._id, task?._id]);

  return (
    <Container align="center" justify="center" direction="column">
      <ContainerData align="center" justify="center" direction="column">
        <Text>{task?.name}</Text>
        <Paragraph>{task?.description}</Paragraph>
        {task?.completed === true ? (
          <Paragraph background={theme?.colors?.feedback?.success}>
            Task completed!
          </Paragraph>
        ) : (
          <Paragraph background={theme?.colors?.feedback?.warning}>
            Task not completed!
          </Paragraph>
        )}
      </ContainerData>
    </Container>
  );
};

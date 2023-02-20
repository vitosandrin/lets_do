import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useState, useEffect } from "react";
import { FaBatteryFull, FaBatteryHalf, FaBatteryQuarter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Label, TextArea } from "../../../../../components";
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
import {
  formatDate,
  formatDateWithHour,
} from "../../../../../utils/formatDate";
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

  const renderPriority = () => {
    switch (task?.priority) {
      case "high":
        return (
          <Label
            text="High priority"
            Icon={FaBatteryFull}
            fontSize="0.7rem"
            primaryColor={theme?.font?.colors?.dark}
            backgroundColor={theme?.colors?.feedback?.error}
          />
        );
      case "median":
        return (
          <Label
            text="Median priority"
            fontSize="0.7rem"
            Icon={FaBatteryHalf}
            primaryColor={theme?.font?.colors?.dark}
            backgroundColor={theme?.colors?.feedback?.warning}
          />
        );
      case "low":
        return (
          <Label
            text="Low priority"
            fontSize="0.7rem"
            Icon={FaBatteryQuarter}
            primaryColor={theme?.font?.colors?.dark}
            backgroundColor={theme?.colors?.feedback?.info}
          />
        );
      default:
        return null;
    }
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
        {renderPriority()}
        <Paragraph weight="300">{task?.description}</Paragraph>
        <ContainerData align="center" justify="center" direction="row">
          {task?.createdAt && (
            <Paragraph>Created at: {formatDate(task?.createdAt!)}</Paragraph>
          )}
          {task?.updatedAt && (
            <Paragraph>Updated at: {formatDate(task?.updatedAt!)}</Paragraph>
          )}
          {task?.scheduleAt && (
            <Paragraph>Schedule at: {formatDate(task?.scheduleAt!)}</Paragraph>
          )}
        </ContainerData>
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

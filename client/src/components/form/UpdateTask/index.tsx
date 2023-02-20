import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, TextArea } from "../../../components";
import {
  getProject,
  getTask,
  removeSingleTask,
} from "../../../redux/projects/projectSlice";
import {
  getOneTask,
  updateTask,
} from "../../../redux/projects/taskAction";
import { theme } from "../../../theme";
import { Container, ContainerData } from "./styles";

export const UpdateTask = ({
  taskId,
  onActionTask,
}: {
  taskId: string;
  onActionTask: () => void | void;
}) => {
  const project = useSelector(getProject);
  const task = useSelector(getTask);
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const [newTask, setNewTask]: any = useState(task);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const getOne = async () => {
    await dispatch(getOneTask({ project: project?._id!, task: taskId! }));
  };

  useEffect(() => {
    getOne();
    setNewTask(task);
    return () => {
      dispatch(removeSingleTask);
    };
  }, [project?._id, task?._id]);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await dispatch(
        updateTask({ project: project?._id!, task: task?._id!, data: newTask })
      );
    } catch (error) {
      console.error(error);
    } finally {
      onActionTask();
      getOne();
    }
  };

  return (
    <Container align="center" justify="center" direction="column">
      <ContainerData align="center" justify="center" direction="column">
        <Input
          text="Task Name"
          type="text"
          name="name"
          primaryColor={theme?.font?.colors?.dark}
          placeholder="Name of your task"
          fontSize="0.6em"
          value={newTask?.name || ""}
          handleOnChange={handleChange}
          width="300px"
        />
        <TextArea
          text="Task Description"
          name="description"
          primaryColor={theme?.font?.colors?.dark}
          placeholder="Description of your task"
          fontSize="0.6em"
          value={newTask?.description || ""}
          handleOnChange={handleChange}
          width="300px"
        />
        <Button
          text="Update"
          onClick={handleSubmit}
          width="80px"
          height="30px"
          primaryColor={theme?.font?.colors?.white}
          hoverColor={theme?.colors?.dark?.pure}
          backgroundColor={theme?.colors?.background[1]}
        />
      </ContainerData>
    </Container>
  );
};

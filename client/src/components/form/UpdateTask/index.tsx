import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Select, TextArea } from "../../../components";
import {
  getProject,
  getTask,
  removeSingleTask,
} from "../../../redux/projects/projectSlice";
import { getOneTask, updateTask } from "../../../redux/projects/taskAction";
import { theme } from "../../../theme";
import { Container, ContainerData, ContainerInput } from "./styles";

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
          width="250px"
        />
        <ContainerInput align="center" justify="center" direction="row">
          <Input
            primaryColor={theme?.font?.colors?.dark}
            fontSize="0.6rem"
            text="Schedule task"
            type="date"
            name="scheduleAt"
            width="150px"
            value={newTask?.scheduleAt || ""}
            handleOnChange={handleChange}
          />
          <Select
            name="priority"
            text="Priority"
            handleOnChange={handleChange}
            value={newTask?.priority! || ""}
            options={[
              { value: "high", label: "High" },
              { value: "median", label: "Median" },
              { value: "low", label: "Low" },
            ]}
            primaryColor={theme?.font?.colors?.dark}
            fontSize="0.6rem"
            width="100px"
          />
        </ContainerInput>
        <TextArea
          text="Task Description"
          name="description"
          primaryColor={theme?.font?.colors?.dark}
          placeholder="Description of your task"
          fontSize="0.6em"
          value={newTask?.description || ""}
          handleOnChange={handleChange}
          width="250px"
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

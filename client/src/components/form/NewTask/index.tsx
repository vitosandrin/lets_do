import React, { useState } from "react";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button, TextArea } from "../..";
import { createProject } from "../../../redux/projects/projectActions";
import { theme } from "../../../theme";
import { Container, FormContainer, Text } from "./styles";
import { FaPlusSquare } from "react-icons/fa";
import { createTask } from "../../../redux/projects/taskAction";
import { getProject } from "../../../redux/projects/projectSlice";
import { ITask } from "../../../@types/task";

interface ITaskState {
  tasks: ITask[];
}

export const NewTask = ({
  onActionTask,
}: {
  onActionTask: () => void | void;
}) => {
  const [tasks, setTasks] = useState<ITaskState>({ tasks: [{}] });
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const project = useSelector(getProject);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const newTasks: any = [...tasks.tasks];
    if (newTasks[index]) {
      newTasks[index][name] = value;
      setTasks({ tasks: newTasks });
    }
  };

  const handleAddForm = () => {
    setTasks({ tasks: [...tasks.tasks, {}] });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await dispatch(createTask({ project: project?._id!, tasks: tasks }));
      //   console.log(tasks);
    } catch (error) {
      console.error(error);
    } finally {
      onActionTask();
      setTasks({
        tasks: [{}],
      });
    }
  };

  const renderForms = () => {
    return tasks.tasks.map((task, index) => {
      return (
        <FormContainer key={index}>
          <Input
            primaryColor={theme?.font?.colors?.dark}
            fontSize="0.6rem"
            text="Task name"
            type="text"
            name="name"
            width="300px"
            value={task.name || ""}
            handleOnChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e, index)
            }
          />
          <TextArea
            text="Task Description"
            name="description"
            primaryColor={theme?.font?.colors?.dark}
            placeholder="Description of your task"
            fontSize="0.6em"
            value={task.description || ""}
            handleOnChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e, index)
            }
            width="300px"
          />
        </FormContainer>
      );
    });
  };

  return (
    <Container align="center" direction="column" justify="center">
      <Text>Create a new Task</Text>
      <Container align="center" direction="column" justify="center">
        <Button
          Icon={FaPlusSquare}
          onClick={handleAddForm}
          width="32px"
          height="32px"
          iconHeight="24px"
          iconWidth="24px"
          primaryColor={theme?.font?.colors?.white}
          hoverColor={theme?.colors?.dark?.pure}
          backgroundColor={theme?.colors?.background[1]}
        />
        {renderForms()}
      </Container>

      <Button
        text="Create"
        onClick={handleSubmit}
        primaryColor={theme?.font?.colors?.white}
        hoverColor={theme?.colors?.dark?.pure}
        backgroundColor={theme?.colors?.background[1]}
      />
    </Container>
  );
};

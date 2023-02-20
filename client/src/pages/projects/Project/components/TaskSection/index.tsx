import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, NewTask } from "../../../../../components";
import { getProject } from "../../../../../redux/projects/projectSlice";
import {
  removeTask,
  setCompletedTask,
} from "../../../../../redux/projects/taskAction";
import { theme } from "../../../../../theme";
import { ISelectedState, ListTask } from "../ListTask";
import { Container, ContainerButton, TaskContainer, TaskData, TaskTitle } from "./styles";

export const TaskSection = ({
  onActionTask,
}: {
  onActionTask: () => void | void;
}) => {
  const project = useSelector(getProject);
  const [modalOpened, setModalOpened] = useState(false);
  const [selected, setSelected] = useState<ISelectedState>({ tasks: [] });
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();

  const handleRemove = async () => {
    try {
      await dispatch(removeTask({ project: project?._id!, tasks: selected }));
    } catch (error) {
      console.log(error);
    } finally {
      onActionTask();
      setSelected({ tasks: [] });
    }
  };

  const handleSetCompleted = async () => {
    try {
      await dispatch(
        setCompletedTask({ project: project?._id!, tasks: selected })
      );
    } catch (error) {
      console.log(error);
    } finally {
      onActionTask();
      setSelected({ tasks: [] });
    }
  };

  return (
    <Container align="center" justify="center" direction="column">
      <ContainerButton align="center" justify="space-evenly" direction="row">
        <Button
          primaryColor={theme?.font?.colors?.white}
          hoverColor={theme?.colors?.feedback?.success}
          backgroundColor={theme?.colors?.feedback?.successhover}
          onClick={() => setModalOpened(true)}
          text="New Task"
          height="35px"
          width="120px"
        />
        <Button
          primaryColor={theme?.font?.colors?.white}
          hoverColor={
            selected?.tasks?.length > 0
              ? theme?.colors?.types?.dragon
              : theme?.colors?.dark[3]
          }
          backgroundColor={
            selected?.tasks?.length > 0
              ? theme?.colors?.types?.ghost
              : theme?.colors?.dark[3]
          }
          cursor={selected?.tasks?.length === 0 ? "not-allowed" : "pointer"}
          disabled={selected?.tasks?.length === 0}
          onClick={handleSetCompleted}
          text={
            selected?.tasks?.length > 0
              ? `Set completed ${selected?.tasks?.length}`
              : "Set completed"
          }
          height="35px"
          width="120px"
        />

        <Button
          primaryColor={theme?.font?.colors?.white}
          hoverColor={
            selected?.tasks?.length > 0
              ? theme?.colors?.types?.fighting
              : theme?.colors?.dark[3]
          }
          backgroundColor={
            selected?.tasks?.length > 0
              ? theme?.colors?.feedback?.error
              : theme?.colors?.dark[3]
          }
          cursor={selected?.tasks?.length === 0 ? "not-allowed" : "pointer"}
          disabled={selected?.tasks?.length === 0}
          onClick={handleRemove}
          text={
            selected?.tasks?.length > 0
              ? `Remove ${selected?.tasks?.length}`
              : "Remove"
          }
          height="35px"
          width="120px"
        />

        <Button
          primaryColor={theme?.font?.colors?.white}
          hoverColor={
            selected?.tasks?.length > 0
              ? theme?.font?.colors?.contrast
              : theme?.colors?.dark[3]
          }
          backgroundColor={
            selected?.tasks?.length > 0
              ? theme?.colors?.feedback?.warning
              : theme?.colors?.dark[3]
          }
          cursor={selected?.tasks?.length === 0 ? "not-allowed" : "pointer"}
          disabled={selected?.tasks?.length === 0}
          onClick={() => setSelected({ tasks: [] })}
          text="Clean"
          height="35px"
          width="120px"
        />
      </ContainerButton>

      <ListTask
        onActionTask={() => onActionTask()}
        selected={selected}
        setSelected={setSelected}
      />

      <Modal open={modalOpened} onClose={() => setModalOpened(false)}>
        <NewTask onActionTask={() => onActionTask()} />
      </Modal>
    </Container>
  );
};

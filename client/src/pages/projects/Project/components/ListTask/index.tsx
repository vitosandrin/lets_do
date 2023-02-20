import { FaCheckSquare, FaInfoCircle, FaPencilAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { ITask } from "../../../../../@types/task";
import { Button, Modal, UpdateTask } from "../../../../../components";
import { getProject } from "../../../../../redux/projects/projectSlice";
import { theme } from "../../../../../theme";
import {
  Container,
  ContainerButton,
  ContentList,
  ListItem,
  TaskContainer,
  Text,
} from "./styles";
import React, { useState } from "react";
import { TaskDetail } from "../TaskDetail";
export interface ISelectedState {
  tasks: { _id: string }[];
}
export const ListTask = ({
  onActionTask,
  selected,
  setSelected,
}: {
  onActionTask: () => void | void;
  selected: ISelectedState;
  setSelected: React.Dispatch<React.SetStateAction<ISelectedState>>;
}) => {
  const project = useSelector(getProject);
  const [modalOpenedUpdate, setModalOpenedUpdate] = useState<string | null>(
    null
  );
  const [modalOpenedInfo, setModalOpenedInfo] = useState<string | null>(null);

  const addTask = (_id: string) => {
    setSelected((prevState: ISelectedState) => {
      const itemIndex = prevState.tasks.findIndex(
        (item: any) => item._id === _id
      );
      if (itemIndex !== -1) {
        const tasks = prevState.tasks.filter((item: any) => item._id !== _id);
        return { tasks };
      } else {
        const tasks = [...prevState.tasks, { _id }];
        return { tasks };
      }
    });
  };

  const todoTasks = project?.tasks?.filter(
    (task: ITask) => task?.completed === false
  );

  const doneTasks = project?.tasks?.filter(
    (task: ITask) => task?.completed === true
  );

  return (
    <Container align="flex-start" justify="center" direction="row">
      <TaskContainer align="center" justify="flex-start" direction="column">
        <ListItem
          color={theme?.font?.colors?.dark}
          background={theme?.colors?.feedback?.warning}
        >
          Tasks to do: {todoTasks?.length}
        </ListItem>
        {todoTasks?.map((item) => (
          <ContentList
            key={item._id}
            align="center"
            justify="space-between"
            direction="row"
          >
            <Button
              primaryColor={theme?.colors?.background[1]}
              backgroundColor={
                selected?.tasks?.some((task: ITask) => task._id === item._id)
                  ? theme?.colors?.dark[3]
                  : theme?.colors?.background[2]
              }
              hoverColor={theme?.colors?.dark[2]}
              onClick={() => addTask(item._id!)}
              Icon={FaCheckSquare}
              iconHeight="26px"
              iconWidth="26px"
              width="30px"
              height="30px"
            />
            <Text>{item.name}</Text>
            <ContainerButton align="center" justify="center" direction="column">
              <Button
                primaryColor={theme?.colors?.background[1]}
                backgroundColor={theme?.colors?.background[2]}
                hoverColor={theme?.colors?.background[2]}
                onClick={() => setModalOpenedUpdate(item._id!)}
                Icon={FaPencilAlt}
                iconHeight="18px"
                iconWidth="18px"
                width="30px"
                height="30px"
              />
              <Button
                primaryColor={theme?.colors?.background[1]}
                backgroundColor={theme?.colors?.background[2]}
                hoverColor={theme?.colors?.background[2]}
                onClick={() => setModalOpenedInfo(item._id!)}
                Icon={FaInfoCircle}
                iconHeight="18px"
                iconWidth="18px"
                width="30px"
                height="30px"
              />
            </ContainerButton>
          </ContentList>
        ))}
      </TaskContainer>
      <TaskContainer align="center" justify="flex-start" direction="column">
        <ListItem
          color={theme?.font?.colors?.dark}
          background={theme?.colors?.feedback?.success}
        >
          Tasks done: {doneTasks?.length}
        </ListItem>
        {doneTasks?.map((item: any) => (
          <ContentList
            key={item._id}
            align="center"
            justify="space-between"
            direction="row"
          >
            <Button
              primaryColor={theme?.colors?.background[1]}
              backgroundColor={
                selected?.tasks?.some((task: ITask) => task._id === item._id)
                  ? theme?.colors?.dark[3]
                  : theme?.colors?.background[2]
              }
              hoverColor={theme?.colors?.dark[2]}
              onClick={() => addTask(item._id!)}
              Icon={FaCheckSquare}
              iconHeight="26px"
              iconWidth="26px"
              width="30px"
              height="30px"
            />
            <Text>{item.name}</Text>
            <ContainerButton align="center" justify="center" direction="column">
              <Button
                primaryColor={theme?.colors?.background[1]}
                backgroundColor={theme?.colors?.background[2]}
                hoverColor={theme?.colors?.background[2]}
                onClick={() => setModalOpenedUpdate(item._id)}
                Icon={FaPencilAlt}
                iconHeight="18px"
                iconWidth="18px"
                width="30px"
                height="30px"
              />
              <Button
                primaryColor={theme?.colors?.background[1]}
                backgroundColor={theme?.colors?.background[2]}
                hoverColor={theme?.colors?.background[2]}
                onClick={() => setModalOpenedInfo(item._id)}
                Icon={FaInfoCircle}
                iconHeight="18px"
                iconWidth="18px"
                width="30px"
                height="30px"
              />
            </ContainerButton>
          </ContentList>
        ))}
      </TaskContainer>
      <Modal
        open={!!modalOpenedUpdate}
        onClose={() => setModalOpenedUpdate(null)}
      >
        {modalOpenedUpdate && (
          <UpdateTask
            taskId={modalOpenedUpdate}
            onActionTask={() => onActionTask()}
          />
        )}
      </Modal>
      <Modal open={!!modalOpenedInfo} onClose={() => setModalOpenedInfo(null)}>
        {modalOpenedInfo && (
          <TaskDetail
            taskId={modalOpenedInfo}
            onActionTask={() => onActionTask()}
          />
        )}
      </Modal>
    </Container>
  );
};

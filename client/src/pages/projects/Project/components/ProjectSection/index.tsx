import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ITask } from "../../../../../@types/task";
import { Button, Modal, UpdateProject } from "../../../../../components";
import { removeProject } from "../../../../../redux/projects/projectActions";
import { getProject } from "../../../../../redux/projects/projectSlice";
import { theme } from "../../../../../theme";
import { formatDateWithHour } from "../../../../../utils/formatDate";
import {
  Container,
  Span,
  Text,
  Paragraph,
  List,
  Wrapper,
  ListItem,
} from "./styles";

export const ProjectSection = ({
  onActionProject,
}: {
  onActionProject: () => void | void;
}) => {
  const project = useSelector(getProject);
  const [modalOpened, setModalOpened] = useState(false);
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const navigate = useNavigate();
  const todoTasks = project?.tasks?.filter(
    (task: ITask) => task?.completed === false
  );

  const doneTasks = project?.tasks?.filter(
    (task: ITask) => task?.completed === true
  );

  const handleRemove = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await dispatch(removeProject({ projects: [{ _id: project?._id! }] }));
    } catch (error) {
      console.error(error);
    } finally {
      navigate("/projects");
    }
  };

  return (
    <Wrapper align="center" justify="center" direction="column">
      {project && (
        <Container align="center" justify="center" direction="column">
          <Text>{project?.name}</Text>
          <Paragraph>{project?.description}</Paragraph>

          <Container align="center" justify="center" direction="row">
            <List>
              <ListItem
                color={theme?.font?.colors?.dark}
                background={theme?.colors?.types?.water}
              >
                total tasks: {project?.tasks?.length}
              </ListItem>
            </List>
            <List>
              <ListItem
                color={theme?.font?.colors?.dark}
                background={theme?.colors?.feedback?.warning}
              >
                tasks to do: {todoTasks?.length}
              </ListItem>
            </List>
            <List>
              <ListItem
                color={theme?.font?.colors?.dark}
                background={theme?.colors?.feedback?.success}
              >
                tasks done: {doneTasks?.length}
              </ListItem>
            </List>
          </Container>
          <Span>
            created at:
            <Paragraph>
              {project?.createdAt && formatDateWithHour(project.createdAt)}
            </Paragraph>
          </Span>
          <Span>
            updated at:
            <Paragraph>
              {project?.updatedAt && formatDateWithHour(project.updatedAt)}
            </Paragraph>
          </Span>

          <Button
            text="Update"
            onClick={() => setModalOpened(true)}
            width="80px"
            height="30px"
            primaryColor={theme?.font?.colors?.white}
            hoverColor={theme?.colors?.dark?.pure}
            backgroundColor={theme?.colors?.background[1]}
          />
          <Button
            primaryColor={theme?.font?.colors?.white}
            hoverColor={theme?.colors?.types?.fighting}
            backgroundColor={theme?.colors?.feedback?.error}
            onClick={handleRemove}
            text="Delete this project!"
            height="35px"
            width="140px"
          />
        </Container>
      )}
      <Modal open={modalOpened} onClose={() => setModalOpened(false)}>
        <UpdateProject onActionProject={() => onActionProject()} />
      </Modal>
    </Wrapper>
  );
};

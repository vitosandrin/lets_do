import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProject } from "../../../redux/projects/projectActions";
import { getProject } from "../../../redux/projects/projectSlice";
import { theme } from "../../../theme";
import { Button } from "../../layout/Button";
import { Input } from "../Input";
import { TextArea } from "../TextArea";
import { Container, FormContainer, Text } from "./styles";

export const UpdateProject = ({
  onActionProject,
}: {
  onActionProject: () => void | void;
}) => {
  const project = useSelector(getProject);
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const [newProject, setNewProject]: any = useState(project);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await dispatch(updateProject(newProject));
    } catch (error) {
      console.error(error);
    } finally {
      onActionProject();
    }
  };

  useEffect(() => {
    setNewProject(project);
  }, [project]);
  return (
    <Container align="center" justify="center" direction="column">
      <Text>Update your project</Text>
      <FormContainer>
        <Input
          text="Project Name"
          type="text"
          name="name"
          primaryColor={theme?.font?.colors?.dark}
          placeholder="Name of your project"
          fontSize="0.6em"
          value={newProject?.name || ""}
          handleOnChange={handleChange}
          width="300px"
        />
        <TextArea
          text="Project Description"
          name="description"
          primaryColor={theme?.font?.colors?.dark}
          placeholder="Description of your task"
          fontSize="0.6em"
          value={newProject?.description || ""}
          handleOnChange={handleChange}
          width="300px"
          fontSizeTextArea="10px"
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
      </FormContainer>
    </Container>
  );
};

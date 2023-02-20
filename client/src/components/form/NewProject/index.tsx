import { useState } from "react";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { Input, Button, TextArea } from "../..";
import { createProject } from "../../../redux/projects/projectActions";
import { theme } from "../../../theme";
import { Container, FormContainer, Text } from "./styles";

interface IProjectState {
  name?: string;
  description?: string;
}

export const NewProject = ({
  onCreateProject,
}: {
  onCreateProject: () => void | void;
}) => {
  const [project, setProject] = useState<IProjectState>({});
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await dispatch(createProject(project));
    } catch (error) {
      console.error(error);
    } finally {
      onCreateProject();
      setProject({});
    }
  };

  return (
    <Container align="center" direction="column" justify="center">
      <Text>Create a new Project</Text>
      <FormContainer>
        <Input
          text="Project name"
          type="text"
          name="name"
          value={project?.name || ""}
          primaryColor={theme?.font?.colors?.dark}
          fontSize="0.6em"
          handleOnChange={handleChange}
          width="300px"
        />
        <TextArea
          text="Project Description"
          name="description"
          primaryColor={theme?.font?.colors?.dark}
          placeholder="Description of your project"
          fontSize="0.6em"
          value={project?.description || ""}
          handleOnChange={handleChange}
          width="300px"
        />
      </FormContainer>
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

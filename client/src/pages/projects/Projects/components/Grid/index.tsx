import { FC, useState } from "react";
import { IGrid } from "../../../../../@types/grid";
import { IProject } from "../../../../../@types/project";
import { ListTask } from "../ListTask";
import { GridContainer, Card, Title, Data, Content, Container } from "./styles";
import { Button, Modal, NewProject } from "../../../../../components";
import { theme } from "../../../../../theme";
import { useNavigate } from "react-router-dom";
import { FaCheckSquare } from "react-icons/fa";
import { removeProject } from "../../../../../redux/projects/projectActions";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { getProjects } from "../../../../../redux/projects/projectSlice";

interface ISelectedState {
  projects: { _id: string }[];
}

export const Grid: FC<IGrid> = ({ data, onActionProject }) => {
  const [selected, setSelected] = useState<ISelectedState>({ projects: [] });
  const [modalOpened, setModalOpened] = useState(false);
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const projects: any = useSelector(getProjects);
  const navigate = useNavigate();

  const addProject = (_id: string) => {
    setSelected((prevState) => {
      //Verifica se o item foi selecionado
      const itemIndex = prevState.projects.findIndex(
        (item) => item._id === _id
      );
      if (itemIndex !== -1) {
        // Remove o item selecionado
        const projects = prevState.projects.filter((item) => item._id !== _id);
        return { projects };
      } else {
        // Adiciona o item se ainda não estiver selecionado
        const projects = [...prevState.projects, { _id }];
        return { projects };
      }
    });
  };

  const handleRemove = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await dispatch(removeProject(selected));
    } catch (error) {
      console.error(error);
    } finally {
      onActionProject();
      setSelected({ projects: [] });
    }
  };

  return (
    <Container align="center" justify="center" direction="column">
      <Container align="center" justify="space-around" direction="row">
        <Button
          primaryColor={theme?.font?.colors?.white}
          hoverColor={theme?.colors?.types?.dragon}
          backgroundColor={theme?.colors?.types?.ghost}
          onClick={() => navigate("/list-projects")}
          text="Export Data"
          disabled={projects?.result?.length === 0}
          height="35px"
          width="120px"
        />

        <Button
          primaryColor={theme?.font?.colors?.white}
          hoverColor={theme?.colors?.feedback?.success}
          backgroundColor={theme?.colors?.feedback?.successhover}
          onClick={() => setModalOpened(true)}
          text="New Project"
          height="35px"
          width="120px"
        />

        <Button
          primaryColor={theme?.font?.colors?.white}
          hoverColor={
            selected?.projects?.length > 0
              ? theme?.colors?.types?.fighting
              : theme?.colors?.dark[3]
          }
          backgroundColor={
            selected?.projects?.length > 0
              ? theme?.colors?.feedback?.error
              : theme?.colors?.dark[3]
          }
          cursor={selected?.projects?.length === 0 ? "not-allowed" : "pointer"}
          disabled={selected?.projects?.length === 0}
          onClick={handleRemove}
          text={
            selected?.projects?.length > 0
              ? `Remove ${selected?.projects?.length}`
              : "Remove"
          }
          height="35px"
          width="120px"
        />

        <Button
          primaryColor={theme?.font?.colors?.white}
          hoverColor={
            selected?.projects?.length > 0
              ? theme?.font?.colors?.contrast
              : theme?.colors?.dark[3]
          }
          backgroundColor={
            selected?.projects?.length > 0
              ? theme?.colors?.feedback?.warning
              : theme?.colors?.dark[3]
          }
          cursor={selected?.projects?.length === 0 ? "not-allowed" : "pointer"}
          disabled={selected?.projects?.length === 0}
          onClick={() => setSelected({ projects: [] })}
          text="Clean"
          height="35px"
          width="120px"
        />
      </Container>
      <GridContainer>
        {data.map((item: IProject, index: number) => (
          <Card key={index}>
            <Button
              primaryColor={theme?.colors?.background[1]}
              backgroundColor={
                selected?.projects?.some((project) => project._id === item._id)
                  ? theme?.colors?.dark[3]
                  : theme?.font?.colors?.white
              }
              hoverColor={theme?.colors?.dark[2]}
              onClick={() => addProject(item._id!)}
              Icon={FaCheckSquare}
              iconHeight="26px"
              iconWidth="26px"
              width="30px"
              height="30px"
            />

            <Content align="center" justify="center" direction="column">
              <Title>{item.name}</Title>
              <ListTask item={item} />
              <Button
                primaryColor={theme?.font?.colors?.white}
                backgroundColor={theme?.colors?.background[1]}
                hoverColor={theme?.colors?.dark[1]}
                onClick={() => item._id && navigate(`/project/${item?._id}`)}
                text="Manage"
              />
            </Content>
          </Card>
        ))}
      </GridContainer>
      <Modal open={modalOpened} onClose={() => setModalOpened(false)}>
        <NewProject onCreateProject={() => onActionProject()} />
      </Modal>
    </Container>
  );
};

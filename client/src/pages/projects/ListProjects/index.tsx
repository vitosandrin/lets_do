import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Label, Modal, Table } from "../../../components";
import { getAllProjects } from "../../../redux/projects/projectActions";
import { getProjects } from "../../../redux/projects/projectSlice";
import { getUser } from "../../../redux/auth/authSlice";
import { ActionContainer, Container, Text } from "./styles";
import { formatDate } from "../../../utils/formatDate";
import { theme } from "../../../theme";
import { IProject } from "../../../@types/project";
import { saveAs } from "file-saver";
import { FaHistory } from "react-icons/fa";

export const ListProjects = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const user = useSelector(getUser);
  const projects: any = useSelector(getProjects);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [csvData, setCsvData] = useState<string>("");

  const updateCsvData = () => {
    if (filteredProjects && typeof filteredProjects !== undefined) {
      const header = Object.keys(filteredProjects[0]).join(",");
      const rows = filteredProjects.map((row) => Object.values(row).join(","));
      const csv = [header, ...rows].join("\r\n");
      setCsvData(csv);
    }
  };
  const handleExportCsv = () => {
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "projects.csv");
  };

  const filteredProjects: Array<{
    Name: string | undefined;
    Description: string | undefined;
    Tasks: number | undefined;
    CreatedAt: string | undefined;
  }> = projects?.result?.map((project: IProject) => {
    const { _id, user, __v, tasks, ...filtered } = project;
    return {
      Name: filtered?.name,
      Description: filtered?.description,
      Tasks: tasks?.length,
      CreatedAt: formatDate(filtered?.createdAt),
    };
  });

  const getAll = () => {
    dispatch(getAllProjects({ page, limit }));
  };

  useEffect(() => {
    getAll();
    updateCsvData();
  }, [dispatch, user?._id, page]);
  return (
    <Container align="center" direction="column" justify="center">
      <ActionContainer align="center" direction="row" justify="center">
        <Input
          text="Set limit data"
          type="number"
          name="limit"
          fontSize="0.7em"
          primaryColor={theme?.font?.colors?.dark}
          placeholder="Your name"
          value={limit}
          handleOnChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLimit(parseInt(e.target.value))
          }
        />
        <Button
          primaryColor={theme?.font?.colors?.white}
          hoverColor={theme?.colors?.dark?.pure}
          backgroundColor={theme?.colors?.background[1]}
          onClick={getAll}
          Icon={FaHistory}
          height="32px"
          width="32px"
          iconHeight="18px"
          iconWidth="18px"
        />
        <Text>You have {projects?.total} projects!</Text>
      </ActionContainer>
      <Button
        primaryColor={theme?.font?.colors?.white}
        backgroundColor={theme?.colors?.feedback?.success}
        hoverColor={theme?.colors?.feedback?.successhover}
        onClick={handleExportCsv}
        text="Export to CSV"
      />
      {filteredProjects && typeof filteredProjects !== undefined && (
        <Table data={filteredProjects} />
      )}
    </Container>
  );
};

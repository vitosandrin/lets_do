import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../../../redux/projects/projectActions";
import { getProjects } from "../../../redux/projects/projectSlice";
import { getUser } from "../../../redux/auth/authSlice";
import { Grid, Paginate } from "../../../components";
import { Container, GridContainer, Text } from "./styles";

export const Projects = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const user = useSelector(getUser);
  const projects: any = useSelector(getProjects);
  const [page, setPage] = useState(1);

  const getAll = () => {
    dispatch(getAllProjects({ page, limit: 9 }));
  };
  useEffect(() => {
    getAll();
  }, [dispatch, user?._id, page]);

  return (
    <Container align="center" justify="center" direction="column">
      <Text>You have {projects?.total} projects!</Text>

      <Paginate
        disabledLeft={page === 1}
        disabledRight={page === projects?.totalPages || !projects?.totalPages}
        left={() => setPage(page - 1)}
        right={() => setPage(page + 1)}
        page={page}
        totalPages={projects?.totalPages || 1}
      />

      <GridContainer>
        {projects?.result && (
          <Grid data={projects?.result} onActionProject={getAll} />
        )}
      </GridContainer>
    </Container>
  );
};

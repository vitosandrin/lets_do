import { Route, Routes } from "react-router-dom";
import { Home, Login, ListProjects, Projects, Register, User, Project } from "../pages";
import { PrivateRoute } from "./PrivateRoute";

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/list-projects"
        element={
          <PrivateRoute>
            <ListProjects />
          </PrivateRoute>
        }
      />
      <Route
        path="/projects"
        element={
          <PrivateRoute>
            <Projects />
          </PrivateRoute>
        }
      />
      <Route
        path="/project/:id"
        element={
          <PrivateRoute>
            <Project />
          </PrivateRoute>
        }
      />
      <Route
        path="/user"
        element={
          <PrivateRoute>
            <User />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

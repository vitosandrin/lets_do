import { useEffect, useState } from "react";
import { Button, Input, ToastMessage } from "../../../components";
import { Container, FormContainer, Text } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/auth/authActions";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../theme";
import { IUser } from "../../../@types/user";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { clearMessage, getMessage } from "../../../redux/auth/authSlice";
import {
  hideMessage,
  showMessage,
} from "../../../redux/toastMessage/toastMessageSlice";

export const Login = () => {
  const [user, setUser] = useState<IUser>({
    email: "",
    password: "",
  });

  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await dispatch(loginUser(user));

      navigate("/");
    } catch (error) {
      console.error(error);
      dispatch(showMessage("Erro ao fazer login!"));
    }
  };

  return (
    <Container>
      <FormContainer>
        <Text>Login</Text>
        <Input
          text="E-mail"
          type="email"
          name="email"
          primaryColor={theme?.font?.colors?.white}
          placeholder="Your e-mail"
          fontSize="0.6em"
          handleOnChange={handleChange}
        />
        <Input
          text="Password"
          type="password"
          name="password"
          fontSize="0.6em"
          primaryColor={theme?.font?.colors?.white}
          placeholder="Your password"
          handleOnChange={handleChange}
        />
        <Button
          text="Sign In"
          onClick={handleSubmit}
          primaryColor={theme?.font?.colors?.white}
          hoverColor={theme?.colors?.feedback?.success}
          backgroundColor={theme?.colors?.feedback?.successhover}
        />
      </FormContainer>
    </Container>
  );
};

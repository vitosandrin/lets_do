import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../../@types/user";
import { Input, Button } from "../../components";
import { updateUser } from "../../redux/auth/authActions";
import { getUser } from "../../redux/auth/authSlice";
import { theme } from "../../theme";
import { Container, Text, Wrapper } from "./styles";

export const User = () => {
  const user = useSelector(getUser);
  const [newUser, setNewUser] = useState<IUser>(user);

  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
    // console.log(user);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await dispatch(updateUser(newUser));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper align="center" justify="center" direction="column">
      <Text>Manage your account!</Text>
      <Container align="center" justify="center" direction="row">
        <Input
          text="Name"
          type="text"
          name="name"
          fontSize="0.7em"
          primaryColor={theme?.font?.colors?.dark}
          placeholder="Your name"
          handleOnChange={handleChange}
        />
        <Input
          text="E-mail"
          type="email"
          name="email"
          primaryColor={theme?.font?.colors?.dark}
          placeholder="Your e-mail"
          fontSize="0.7em"
          handleOnChange={handleChange}
        />
      </Container>
      <Container align="center" justify="center" direction="row">
        <Input
          text="Password"
          type="password"
          name="password"
          fontSize="0.7em"
          primaryColor={theme?.font?.colors?.dark}
          placeholder="Your password"
          handleOnChange={handleChange}
        />
        <Input
          text="Confirm password"
          type="password"
          name="rePassword"
          primaryColor={theme?.font?.colors?.dark}
          placeholder="Confirm your password"
          fontSize="0.7em"
          handleOnChange={handleChange}
        />
      </Container>

      <Button
        text="Update user"
        onClick={handleSubmit}
        primaryColor={theme?.font?.colors?.white}
        hoverColor={theme?.colors?.dark?.pure}
        backgroundColor={theme?.colors?.background[1]}
      />
    </Wrapper>
  );
};

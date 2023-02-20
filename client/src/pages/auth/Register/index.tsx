import { useState } from "react";
import { Button, Input } from "../../../components";
import { Container, FormContainer, Paragraph, Text } from "./styles";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../redux/auth/authActions";
import { theme } from "../../../theme";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../../@types/user";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

export const Register = () => {
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await dispatch(registerUser(user));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <FormContainer>
        <Text>Register</Text>
        <Input
          text="Name"
          type="text"
          name="name"
          primaryColor={theme?.font?.colors?.white}
          placeholder="Your e-mail"
          fontSize="0.6em"
          handleOnChange={handleChange}
        />
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
        <Input
          text="Repeat Password"
          type="password"
          name="rePassword"
          fontSize="0.6em"
          primaryColor={theme?.font?.colors?.white}
          placeholder="Repeat your password"
          handleOnChange={handleChange}
        />
        <Button
          text="Sign Up"
          onClick={handleSubmit}
          primaryColor={theme?.font?.colors?.white}
          hoverColor={theme?.colors?.feedback?.success}
          backgroundColor={theme?.colors?.feedback?.successhover}
        />
        <Paragraph>
          Have an account?
          <Link to={"/login"}> Sign in</Link>
        </Paragraph>
      </FormContainer>
    </Container>
  );
};

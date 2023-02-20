import { FC, ReactNode } from "react";
import { IconContainer, ToastContainer, ToastText } from "./styles";

interface IToastMessageProps {
  icon?: ReactNode;
  text: string;
}

export const ToastMessage: FC<IToastMessageProps> = ({ icon, text }) => {
  return (
    <ToastContainer>
      {icon && <IconContainer>{icon}</IconContainer>}
      <ToastText>{text}</ToastText>
    </ToastContainer>
  );
};

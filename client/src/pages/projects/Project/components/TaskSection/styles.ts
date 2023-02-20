import styled from "styled-components";
import { FlexBox } from "../../../../../components";

export const Container = styled(FlexBox)`
  padding: 1rem;
  gap: 1rem;
`;

export const ContainerButton = styled(FlexBox)`
  padding: 1rem;
`;

export const TaskContainer = styled(FlexBox)`
  width: 33%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TaskTitle = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.font.colors.dark};
`;

export const TaskData = styled.p`
  font-size: 0.8rem;
  font-weight: lightner;
  color: ${({ theme }) => theme.font.colors.dark};
`;

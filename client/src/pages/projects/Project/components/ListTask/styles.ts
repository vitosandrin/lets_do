import styled from "styled-components";

import { FlexBox } from "../../../../../components";

interface IItemTaskProps {
  color: string;
  background: string;
}
export const Container = styled(FlexBox)`
  padding: 1rem;
  gap: 0.5rem;
`;

export const TaskContainer = styled(FlexBox)`
  position: relative;
  top: 0;
  width: 33%;
  padding: 1rem;
  gap: 0.5rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TaskTitle = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.font.colors.dark};
`;

export const ContentList = styled(FlexBox)`
  padding: 0.5rem;
  padding: 0.5rem;
  box-shadow: 0px 2px 4px ${({ theme }) => theme?.colors?.dark[4]};
`;

export const ListItem = styled.label<IItemTaskProps>`
  text-align: center;
  justify-content: center;
  display: flex;
  aling-items: center;
  font-size: 1rem;
  padding: 0.3rem;
  border-radius: 0.3rem;
  min-width: 17px;
  min-height: 17px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
`;

export const Text = styled.p`
  font-weight: lighter;
  font-size: 0.8rem;
  text-align: center;
  max-width: 70%;
  color: ${({ theme }) => theme.font.colors.dark};
`;

export const ContainerButton = styled(FlexBox)`
  gap: 0.2rem;
  max-width: 32px;
`;

import styled from "styled-components";

import { FlexBox } from "../../../../../components";

interface IItemTaskProps {
  color: string;
  background: string;
}

export const ContentList = styled(FlexBox)`
  width: 100%;
`;
export const List = styled.div`
  display: flex;
  margin: 0.1rem;
  gap: 0.3rem;
`;

export const ListItem = styled.label<IItemTaskProps>`
  text-align: center;
  justify-content: center;
  display: flex;
  aling-items: center;
  font-size: 0.625rem;
  padding: 0.2rem;
  border-radius: 0.3rem;
  min-width: 17px;
  min-height: 17px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
`;

export const Text = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.font.colors.dark};
`;

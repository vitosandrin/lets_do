import styled from "styled-components";
import { FlexBox } from "../../../../../components";

interface IItemTaskProps {
  color: string;
  background: string;
}

export const Container = styled(FlexBox)`
  gap: 0.5rem;
  padding: 0.5rem;
  text-align: center;
`;
export const Wrapper = styled(FlexBox)`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  gap: 0.5rem;
  padding: 1rem;
  width: 40%;
  @media (max-width: ${({ theme }) => theme?.breakpoints?.md}) {
    width: 80%;
  }
`;

export const Text = styled.h6`
  font-size: 1rem;
  color: ${({ theme }) => theme.font.colors.dark};
`;

export const Span = styled.span`
  display: flex;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.font.colors.dark};
`;

export const Paragraph = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  color: ${({ theme }) => theme.font.colors.dark};
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

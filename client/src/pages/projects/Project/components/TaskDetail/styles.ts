import styled from "styled-components";
import { FlexBox } from "../../../../../components";

interface IParagraphProps {
  background?: string;
  weight?: string;
}

export const Container = styled(FlexBox)``;
export const ContainerTask = styled(FlexBox)``;
export const ContainerData = styled(FlexBox)`
  gap: 1rem;
  text-align: center;
`;
export const Text = styled.h6`
  font-size: 1rem;
  color: ${({ theme }) => theme.font.colors.dark};
`;

export const Span = styled.span`
  display: flex;
  gap: 0.5rem;
  font-weight: 400;

  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.font.colors.dark};
`;

export const Paragraph = styled.p<IParagraphProps>`
  font-size: 0.75rem;
  font-weight: ${(props) => props.weight || "500"};
  padding: 0.5rem;
  border-radius: 0.3rem;
  color: ${({ theme }) => theme.font.colors.dark};
  background-color: ${(props) => props.background};
`;

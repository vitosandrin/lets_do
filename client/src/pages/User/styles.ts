import styled from "styled-components";
import { FlexBox } from "../../components";

export const Container = styled(FlexBox)`
  gap: 1rem;
`;

export const Wrapper = styled(FlexBox)`
  margin-top: 2.5rem;
  display: flex;
  gap: 1rem;
`;

export const Text = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.font.colors.dark};
`;
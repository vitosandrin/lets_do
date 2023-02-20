import styled from "styled-components";
import { FlexBox } from "../../../components";

export const Container = styled(FlexBox)`
  display: flex;
`;
export const ActionContainer = styled(FlexBox)`
  gap: 0.5rem;
  margin-top: 2rem;
`;

export const Text = styled.h4`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.font.colors.dark};
`;

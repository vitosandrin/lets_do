import styled from "styled-components";
import { FlexBox } from "../../../components";

export const Container = styled(FlexBox)`
  display: flex;
  margin-top: 1.5rem;
  gap: 1rem;
`;

export const GridContainer = styled.div`
  display: flex;
  width: 80%;
`;

export const Text = styled.h4`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.font.colors.dark};
`;

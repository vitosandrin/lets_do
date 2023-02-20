import styled from "styled-components";
import { FlexBox } from "../../utils/Flexbox";
export const Container = styled(FlexBox)`
  gap: 0.5rem;
  padding: 0.5rem;
`;

export const Text = styled.h6`
  font-size: 1.5rem;
  color: ${({ theme }) => theme?.font?.colors?.dark};
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

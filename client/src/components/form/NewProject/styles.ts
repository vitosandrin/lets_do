import { FlexBox } from "../../utils/Flexbox/index";
import styled from "styled-components";

export const Container = styled(FlexBox)`
  gap: 1rem;
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

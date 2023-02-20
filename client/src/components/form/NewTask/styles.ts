import { FlexBox } from "../../utils/Flexbox/index";
import styled from "styled-components";

export const Container = styled(FlexBox)`
  gap: 0.5rem;
`;

export const Text = styled.h6`
  font-size: 1.5rem;
  color: ${({ theme }) => theme?.font?.colors?.dark};
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme?.colors?.dark[1]};
`;

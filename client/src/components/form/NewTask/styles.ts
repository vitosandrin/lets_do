import { FlexBox } from "../../utils/Flexbox/index";
import styled from "styled-components";

export const Container = styled(FlexBox)`
  gap: 0.5rem;
`;

export const Wrapper = styled(FlexBox)`
  gap: 0.5rem;
  width: 80vw;
`;

export const ContainerInput = styled(FlexBox)``;

export const Text = styled.h6`
  font-size: 1.5rem;
  color: ${({ theme }) => theme?.font?.colors?.dark};
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  gap: 1rem;
  align-items: center;
  text-align: center;
`;

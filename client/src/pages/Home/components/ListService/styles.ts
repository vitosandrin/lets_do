import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  gap: 1rem;
  margin: 1rem;

  padding: 1.5rem 1rem 1.5rem 1rem;
  width: 300;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme?.colors?.dark?.[1]};
  color: ${({ theme }) => theme?.font?.colors?.dark};
`;

export const Text = styled.h1`
  font-size: 1.25rem;
  color: ${({ theme }) => theme?.font?.colors?.white};
`;

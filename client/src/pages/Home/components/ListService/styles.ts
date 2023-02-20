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
  width: 350px;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme?.colors?.dark?.[1]};
  color: ${({ theme }) => theme?.font?.colors?.dark};
`;

export const Text = styled.h1`
  font-size: 1.2rem;
  color: ${({ theme }) => theme?.font?.colors?.white};
`;

export const Paragraph = styled.p`
  font-size: 0.75rem;
  font-weight: "500";
  padding: 0.5rem;
  border-radius: 0.3rem;
  color: ${({ theme }) => theme.font.colors.white};
`;

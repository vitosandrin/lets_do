import styled from "styled-components";
import { Button } from "../../../../../components";
import { FlexBox } from "../../../../../components/utils/Flexbox";

export const Container = styled(FlexBox)`
  display: flex;
  gap: 1rem;
`;

export const GridContainer = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;

  width: 100%;
  grid-template-columns: repeat(auto-fit, 250px);
  gap: 1rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-itens: center;
  justify-content: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.light.pure};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 1rem;
  > h2 {
    color: black;
  }
  > p {
    color: black;
  }
  > svg {
    color: ${({ theme }) => theme.colors.background[1]};
    height: 32px;
    width: 32px;
  }
`;

export const Content = styled(FlexBox)`
  width: 100%;
  gap: 1rem;

  > svg {
    color: ${({ theme }) => theme.colors.background[1]};
    height: 32px;
    width: 32px;
  }
`;
export const Title = styled.h4`
  color: ${({ theme }) => theme.colors.background[1]};
`;

export const Data = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.font.colors.dark};
`;

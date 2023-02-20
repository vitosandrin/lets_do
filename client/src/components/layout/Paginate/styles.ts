import { MouseEventHandler } from "react";
import styled from "styled-components";
import { FlexBox } from "../../utils/Flexbox";

interface IButtonPaginateProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  cursor?: string;
}

export const Container: any = styled(FlexBox)`
  gap: 1rem;
  > svg {
    height: 24px;
    width: 24px;
    color: ${({ theme }) => theme?.font?.colors?.white};
  }
`;

const Button = styled.button<IButtonPaginateProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme?.colors?.background?.[1]};
  color: ${({ theme }) => theme?.font?.colors?.white};
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 16px;
  cursor: ${(props) => props?.cursor};

  :hover {
    background-color: ${(props) =>
      props?.cursor === "not-allowed"
        ? props.theme.colors.background[1]
        : props.theme.colors.dark.pure};
  }
`;

export const LeftButton = styled(Button)<IButtonPaginateProps>``;
export const RightButton = styled(Button)<IButtonPaginateProps>``;

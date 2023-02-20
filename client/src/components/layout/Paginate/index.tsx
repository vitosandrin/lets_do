import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Container, RightButton, LeftButton } from "./styles";
import { FC } from "react";
import { MouseEventHandler } from "react";
import { Label } from "../Label";
import { theme } from "../../../theme";

export interface IPaginate {
  right: MouseEventHandler<HTMLButtonElement>;
  left: MouseEventHandler<HTMLButtonElement>;
  disabledLeft?: boolean;
  disabledRight?: boolean;
  page: number;
  totalPages: number;
}

export const Paginate: FC<IPaginate> = ({
  right,
  left,
  disabledLeft,
  disabledRight,
  page,
  totalPages,
}) => {
  return (
    <Container align="center" justify="center" direction="row">
      <LeftButton
        onClick={left}
        disabled={disabledLeft}
        cursor={page === 1 ? "not-allowed" : "pointer"}
      >
        <FaArrowCircleLeft />
      </LeftButton>
      <Label
        primaryColor={theme?.font?.colors?.white}
        backgroundColor={theme?.colors?.background[1]}
        text={`Page ${page} of ${totalPages}`}
        fontSize="0.7rem"
        borderRadius="0.3rem"
        width="100px"
        height="32px"
      />
      <RightButton
        onClick={right}
        disabled={disabledRight}
        cursor={page === totalPages || !totalPages ? "not-allowed" : "pointer"}
      >
        <FaArrowCircleRight />
      </RightButton>
    </Container>
  );
};

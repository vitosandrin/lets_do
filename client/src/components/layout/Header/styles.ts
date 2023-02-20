import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const Container = styled.div`
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme?.colors?.dark?.[1]};
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

export const HeaderIcon = styled(FaBars)`
  color: ${({ theme }) => theme?.font?.colors?.white};
  width: 30px;
  height: 30px;
  margin-left: 32px;
  position: absolute;
  cursor: pointer;
`;

export const Text = styled.h6`
  font-size: 1em;
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme?.font?.colors?.white};
`;

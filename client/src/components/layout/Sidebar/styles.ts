import styled from "styled-components";
import { FlexBox } from "../../utils/Flexbox";

interface IAside {
  sidebar: boolean;
}

export const Overlay = styled.div`
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.525);
  z-index: 1000;
`;

export const Container = styled.aside<IAside>`
  background-color: ${({ theme }) => theme?.colors?.dark?.[1]};
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 1000;
  width: 14.775rem;
  left: ${(props) => (props.sidebar ? "0" : "-100%")};
  animation: showSidebar 0.4s;
  > svg {
    position: fixed;
    color: ${({ theme }) => theme?.font?.colors?.white};
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 14.775rem;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;

export const Card = styled(FlexBox)`
  width: 85%;
  font-size: 20px;
  color: ${({ theme }) => theme?.font?.colors?.white};
  padding: 10px;
  cursor: pointer;
  border-radius: 0.3rem;
  margin: 0 15px 20px;
  > svg {
    margin: 0 20px;
  }
  &:hover {
    background-color: ${({ theme }) => theme?.colors?.background[1]}
`;

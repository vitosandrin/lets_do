import styled from "styled-components";

export const ToastContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 20px;
  right: 20px;

  background-color: ${({ theme }) => theme?.colors?.background[1]};
  color: ${({ theme }) => theme?.font?.colors?.white};
  padding: 16px;
  border-radius: 4px;
  z-index: 1001;
`;

export const IconContainer = styled.div`
  margin-right: 16px;
`;

export const ToastText = styled.p`
  margin: 0;
`;

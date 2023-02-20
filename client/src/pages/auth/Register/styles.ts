import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content center;
  height: 93vh;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content center;
  width: 50%;
  max-width: 300px;
  margin: 2rem auto;
  background-color: ${({ theme }) => theme?.colors?.dark?.[1]}; 
  border-radius: 15px;
  padding: 1.5rem;
  
  -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

export const Text = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme?.font?.colors?.white};
`;

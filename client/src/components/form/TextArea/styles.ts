import styled from "styled-components";

interface ILabelProps {
  primaryColor?: string;
  fontSize?: string;
}

interface ITextAreaProps {
  height?: string;
  width?: string;
  fontSizeTextArea?: string;
}

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1em;
`;

export const Label = styled.label<ILabelProps>`
  margin-bottom: 0.3em;
  font-weight: normal;
  font-size: ${(props) => props?.fontSize};
  color: ${(props) => props?.primaryColor};
`;

export const TextAreaStyle = styled.textarea<ITextAreaProps>`
  border-radius: 5px;
  font-size:${(props) => props.fontSizeTextArea || "10px"}
  height: ${(props) => props.height || "100px"};
  width: ${(props) => props.width || "200px"};
  padding: 1em;
  resize: vertical;
`;

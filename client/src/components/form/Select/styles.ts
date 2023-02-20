import styled from "styled-components";
import { FlexBox } from "../../utils/Flexbox";

interface ILabelProps {
  primaryColor?: string;
  fontSize?: string;
}

interface IInputProps {
  primaryColor?: string;
  height?: string;
  width?: string;
}

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  aling-items: center;
  justify-content: center;
  margin-bottom: 1em;
`;

export const Label = styled.label<ILabelProps>`
  margin-bottom: 0.3em;
  font-weight: normal;
  font-size: ${(props) => props?.fontSize};
  color: ${(props) => props?.primaryColor};
`;

export const InputStyle = styled.input<IInputProps>`
  border-radius: 5px;
  color: ${(props) => props.primaryColor}
  height: ${(props) => props.height || "30px"};
  width: ${(props) => props.width || "200px"};
  padding: 0.3rem;
`;

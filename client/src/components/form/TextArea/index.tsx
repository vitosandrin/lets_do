import { FC } from "react";
import { Form, Label, TextAreaStyle } from "./styles";

interface ITextAreaProps {
  text?: string;
  name?: string;
  placeholder?: string;
  handleOnChange?: React.ChangeEventHandler;
  value?: string | number;
  primaryColor: string;
  fontSize: string;
  height?: string;
  width?: string;
  fontSizeTextArea?: string;
}

export const TextArea: FC<ITextAreaProps> = ({
  text,
  name,
  placeholder,
  handleOnChange,
  value,
  primaryColor,
  fontSize,
  height,
  width,
  fontSizeTextArea
}) => {
  return (
    <Form>
      <Label htmlFor={name} fontSize={fontSize} primaryColor={primaryColor}>
        {text}:
      </Label>
      <TextAreaStyle
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        height={height}
        width={width}
        fontSizeTextArea={fontSizeTextArea}
      />
    </Form>
  );
};

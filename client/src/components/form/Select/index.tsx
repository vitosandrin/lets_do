import { Label, Form, InputStyle } from "./styles";
import { FC } from "react";

interface ISelectProps {
  name?: string;
  text?: string;
  handleOnChange?: React.ChangeEventHandler;
  value?: string;
  options: { value: string; label: string }[];
  primaryColor: string;
  fontSize: string;
  height?: string;
  width?: string;
}

export const Select: FC<ISelectProps> = ({
  name,
  text,
  handleOnChange,
  value,
  options,
  primaryColor,
  fontSize,
  height,
  width,
}) => {
  return (
    <Form>
      <Label htmlFor={name} fontSize={fontSize} primaryColor={primaryColor}>
        {text}:
      </Label>
      <InputStyle
        as="select"
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value}
        width={width}
        height={height}
        primaryColor={primaryColor}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </InputStyle>
    </Form>
  );
};

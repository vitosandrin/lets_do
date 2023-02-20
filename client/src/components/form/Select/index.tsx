import { FC } from "react";
import styles from "./styles.module.css";

interface ISelectProps {
  text?: string;
  name?: string;
  options?: any[];
  handleOnChange?: React.ChangeEventHandler;
  value?: string;
}

export const Select: FC<ISelectProps> = ({
  text,
  name,
  options,
  handleOnChange,
  value,
}) => {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ""}
      >
        <option>Selecione uma opção</option>
        {options!.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

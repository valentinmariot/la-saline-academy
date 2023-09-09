import { ChangeEventHandler, FC, KeyboardEventHandler } from "react";
import BasicIcon from "../basicIcon/basicIcon";

import styles from "./inputContainer.module.scss";

interface InputContainerProps {
  id: string;
  label?: string;
  labelFor?: string;
  placeholder?: string;
  icon?: string;
  disabled?: boolean;
  error?: string;
  type: string;
  required?: boolean;
  onChange?: ChangeEventHandler;
  pattern?: string;
  value?: string;
  onKeyPress?: KeyboardEventHandler<HTMLInputElement>;
}

const InputContainer: FC<InputContainerProps> = ({
  id,
  label,
  labelFor,
  placeholder,
  icon,
  disabled,
  type,
  required,
  error,
  onChange,
  pattern,
  value,
  onKeyPress,
}) => {
  return (
    <div className={styles.input}>
      {label && (
        <label className={styles.input_label} htmlFor={labelFor}>
          {label}
        </label>
      )}
      <div className={styles.input_content}>
        {icon && <BasicIcon name={icon} />}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={icon && styles.withIcon}
          onChange={onChange}
          pattern={pattern}
          value={value}
          onKeyPress={onKeyPress}
        />
      </div>
      {error && <span className={styles.input_error}>{error}</span>}
    </div>
  );
};

export default InputContainer;

import "./input.scss";
import { useId } from "react";
import type { InputProps } from "../model/types";
import { useTranslation } from "react-i18next";

const Input = ({ label, hookProps, type = "text", ...props }: InputProps) => {
  const id = useId();
  const { value, onChange, onBlur, isDirty, error } = hookProps;
  const hasError = !!(isDirty && error);
  const { t } = useTranslation();

  return (
    <div className={`ui-input-root ${hasError ? 'ui-input-root--error' : ''}`}>
      <div className="ui-input-root__wrapper">
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder=" "
          className="ui-input-root__field"
          {...props}
        />
        <label htmlFor={id} className="ui-input-root__label">
          {label}
        </label>
      </div>

      {hasError && (
        <span className="ui-input-root__error-message">
          {t(error)}
        </span>
      )}
    </div>
  );
};

export default Input;
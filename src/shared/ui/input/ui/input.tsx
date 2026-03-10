import { useId } from "react";
import "./input.scss";
import type { InputProps } from "../model/types";


 const Input = ({ label, hookProps, ...props }: InputProps) => {
  const id = useId();
  const { value, onChange, onBlur, isDirty, error } = hookProps;
  const hasError = !!(isDirty && error);

  return (
    <div className={`ui-input-root ${hasError ? 'ui-input-root--error' : ''}`}>
      <div className="ui-input-root__wrapper">
        <input
          id={id}
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
          {error}
        </span>
      )}
    </div>
  );
};

export default Input
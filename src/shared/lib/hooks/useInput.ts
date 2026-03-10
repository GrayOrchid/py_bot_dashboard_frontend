import { useState, type ChangeEvent} from 'react';
import { validateValue} from '../utils/validate'; 

export const useInput = (initialValue: string, rules: any) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const runValidation = (val: string) => {
    const errorResult = validateValue(val, rules);
    setError(errorResult);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    
    if (isDirty) {
      runValidation(newValue);
    }
  };

  const onBlur = () => {
    setIsDirty(true);
    runValidation(value); 
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    error,
    isValid: error === null && (rules.isEmpty ? value.trim() !== '' : true)
  };
};
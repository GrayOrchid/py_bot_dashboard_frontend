export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string; 
  hookProps: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    isDirty: boolean;
    error: string | null;
  };
}
interface SelectOption {
    value: string;
    label: string;
    icon?: React.ReactNode;
}

export interface SelectProps {
    options: SelectOption[];
    value?: string;
    onChange: (value: string) => void;
    placeholder?: string;
}
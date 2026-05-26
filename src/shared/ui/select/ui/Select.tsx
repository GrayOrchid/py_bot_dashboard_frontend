import { useRef, useState} from 'react';
import { ChevronDown } from 'lucide-react';
import type { SelectProps } from '../model/types';
import { useClickOutside } from '@/shared/lib/hooks';
import './select.scss';

const Select = ({ options, value, onChange, placeholder = "Выберите..." }: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectedOption = options.find(opt => opt.value === value);
    const selectRef = useRef<HTMLDivElement>(null);

    useClickOutside(selectRef, () => setIsOpen(false));

    return (
        <div 
            className={`select-container ${isOpen ? 'is-open' : ''}`} 
            ref={selectRef}
        >
            <button
                type="button"
                className="select-trigger"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="select-current">
                    {selectedOption?.icon && <span className="select-icon">{selectedOption.icon}</span>}
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <span className="select-arrow">
                    <ChevronDown size={18} />
                </span>
            </button>

            <ul className="select-dropdown">
                {options.map((option) => (
                    <li key={option.value}>
                        <button
                            className={`select-option ${value === option.value ? 'selected' : ''}`}
                            onClick={() => {
                                onChange(option.value);
                                setIsOpen(false);
                            }}
                        >
                            {option.icon && <span className="select-icon">{option.icon}</span>}
                            {option.label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Select;
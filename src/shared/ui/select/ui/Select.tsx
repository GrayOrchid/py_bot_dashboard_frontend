import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { SelectProps } from '../model/types';
import './select.scss';
import { useClickOutside } from '@/shared/lib/hooks';

const Select = ({ options, value, onChange, placeholder = "Выберите..." }: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectedOption = options.find(opt => opt.value === value);
    const selectRef = useRef<HTMLDivElement>(null);

    useClickOutside(selectRef, () => setIsOpen(false));

    return (
        <div className="select-container" ref={selectRef}>
            <button
                type="button"
                className="select-trigger"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="select-current">
                    {selectedOption?.icon && <span className="select-icon">{selectedOption.icon}</span>}
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
                    <ChevronDown size={18} />
                </motion.span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        className="select-dropdown"
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
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
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Select;
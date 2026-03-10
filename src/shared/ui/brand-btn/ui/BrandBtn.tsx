import clsx from 'clsx';
import './brandBtn.scss';
import type { BrandButtonProps } from '../model/types';

export const BrandBtn = ({
brand,
icon,
children,
fullWidth = false, 
...props}: BrandButtonProps) => {
    return (
        <button
            className={clsx(
                'brand-btn',
                `brand-btn--${brand}`,
                { 'brand-btn--full-width': fullWidth },
            )}
            {...props} 
        >
            {icon && <span className="brand-btn__icon">{icon}</span>}
            <span className="brand-btn__text">{children}</span>
        </button>
    );
};

export default BrandBtn;
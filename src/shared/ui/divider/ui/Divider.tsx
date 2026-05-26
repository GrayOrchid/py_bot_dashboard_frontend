import type { CSSProperties } from 'react';
import type { DividerProps } from '../model/types';
import './divider.scss';

const Divider = ({ 
    children, 
    align = 'center', 
    color, 
    textColor, 
    weight,
    margin,
    fontSize
}: DividerProps) => {
    
    const mods = [
        `divider--content-${align}`,
        !children && 'divider--no-text'
    ].filter(Boolean).join(' ');

    const style = {
        '--divider-color': color,
        '--divider-text-color': textColor,
        '--divider-weight': weight,
        '--divider-margin': margin,
        '--divider-font-size': fontSize,
    } as CSSProperties;

    return (
        <div className={`divider ${mods}`} style={style}>
            {children && <span className="divider__text">{children}</span>}
        </div>
    );
};

export default Divider;
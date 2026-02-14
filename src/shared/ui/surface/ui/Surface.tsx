import type { SurfaceProps } from '../model/types';
import './surface.scss';
import clsx from 'clsx';

const Surface = ({
    children,
    variant = 'raised',
    fullWidth = false,
    centered = false,
    className,
    onClick,
    style
}: SurfaceProps) => {
    return (
        <div
            onClick={onClick}
            className={clsx(
                'surface-container',
                variant,
                { 'centered-content': centered },
                className
            )}
            style={{
                width: fullWidth ? '100%' : 'auto',
                ...style
            }}
        >
            {children}
        </div>
    );
};

export default Surface;
import type { SurfaceProps } from '../model/types';
import './surface.scss';
import clsx from 'clsx';

const Surface = ({
    children,
    variant = 'raised',
    fullWidth = false,
    className,
    style,
    ...props 
}: SurfaceProps) => {
    return (
        <div
            className={clsx('surface-container', variant, className)}
            style={{
                ...(fullWidth ? { width: '100%' } : {}),
                ...style
            }}
            {...props}
        >
            {children}
        </div>
    );
};

export default Surface;
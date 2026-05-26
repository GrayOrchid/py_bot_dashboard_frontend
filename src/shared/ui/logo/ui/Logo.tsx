import { Zap } from 'lucide-react';
import clsx from 'clsx';
import './logo.scss';
import type { LogoProps } from '../model/types';

const Logo = ({ size = 24, className, hideText = false }: LogoProps) => {
    const fontSize = Math.floor(size * 0.8);

    return (
        <div className={clsx('app-logo', className)} style={{ gap: size / 3 }}>
            <div 
                className="app-logo__icon-wrapper" 
                style={{ width: size * 1.5, height: size * 1.5 }}
            >
                <Zap size={size} className="app-logo__icon" fill="currentColor" />
            </div>
            
            {!hideText && (
                <span 
                    className="app-logo__text" 
                    style={{ fontSize: fontSize > 14 ? fontSize : 14 }}
                >
                    NEO APP
                </span>
            )}
        </div>
    );
};

export default Logo
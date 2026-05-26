import clsx from 'clsx';
import { User2 } from 'lucide-react';
import './userAvatar.scss';
import type { AvatarProps } from '../model/types';


export const UserAvatar = ({
    src,
    size = 48,
    variant = 'squircle',
    hasBorder = false,
    className = ''
}: AvatarProps) => {
    return (
        <div 
            className={clsx('avatar', `avatar--${variant}`, { 'avatar--bordered': hasBorder }, className)}
            style={{ width: size, height: size }}
        >
            {src ? (
                <img src={src} alt="avatar" className="avatar__img" />
            ) : (
                <div className="avatar__placeholder">
                    <User2 size={size * 0.5} strokeWidth={1.5} />
                </div>
            )}
        </div>
    );
};

export default UserAvatar
import { forwardRef } from 'react';
import clsx from 'clsx';
import './listItem.scss';
import type { ExtendedListItemProps } from '../model/types';

const ListItem = forwardRef<any, ExtendedListItemProps>((props, ref) => {
    const {
        label,
        icon,
        action,
        isActive,
        className,
        onClick,
        as: Component = 'div',
        ...rest
    } = props;

    return (
        <Component
            ref={ref} 
            className={clsx('list-item', className, {
                'list-item--clickable': !!onClick || rest.to,
                'list-item--active': isActive
            })}
            onClick={onClick}
            {...rest}
        >
            <div className="list-item__content">
                {icon && <span className="list-item__icon">{icon}</span>}
                <span className="list-item__label">{label}</span>
            </div>
            
            <div className="list-item__right">
                {isActive !== undefined && (
                    <div className={clsx('list-item__indicator', {
                        'list-item__indicator--active': isActive,
                        'list-item__indicator--inactive': !isActive
                    })} />
                )}
                {action && (
                    <div className="list-item__action">
                        {action}
                    </div>
                )}
            </div>
        </Component>
    );
});

ListItem.displayName = 'ListItem';

export default ListItem;
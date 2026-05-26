import { forwardRef } from 'react';
import clsx from 'clsx';
import './button.scss';
import type { ButtonProps } from '../model/types';
import { useTranslation } from 'react-i18next';

export const Button = forwardRef<any, ButtonProps>((props, ref) => {
  const {
    className,
    variant = 'primary',
    isLoading,
    isNeumorphic = false, 
    children,
    as: Component = 'button',
    ...others
  } = props;

  const { t } = useTranslation();

  return (
    <Component
      ref={ref}
      className={clsx('base-btn', variant, className, {
        'is-loading': isLoading,
        'is-disabled': others.disabled || isLoading,
        'is-neumorphic': isNeumorphic 
      })}
      type={Component === 'button' ? (others.type || 'button') : undefined}
      {...others}
    >
      {isLoading ? t('button.load') : children}
    </Component>
  );
});

export default Button;
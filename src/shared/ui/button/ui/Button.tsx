import { forwardRef } from 'react';
import clsx from 'clsx'; 
import './button.scss';
import type { ButtonProps } from '../model/types';


 const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, variant = 'primary', isLoading, children, ...others } = props;

  return (
    <button
      ref={ref}
      className={clsx('base-btn', variant, className, { 'is-loading': isLoading })}
      {...others}
    >
      {isLoading ? 'Загрузка...' : children}
    </button>
  );
});


export default Button
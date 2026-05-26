import type { ButtonHTMLAttributes, ReactNode, ElementType } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'link' | 'ghost'; 
  isLoading?: boolean;
  as?: ElementType; 
  to?: string; 
  href?: string; 
  isNeumorphic?:boolean;
}
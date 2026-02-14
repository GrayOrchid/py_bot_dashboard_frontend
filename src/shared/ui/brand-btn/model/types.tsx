import type { ButtonHTMLAttributes, ReactNode } from "react";

type Brand = 'discord' | 'telegram';

export interface BrandButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    brand: Brand;
    icon?: ReactNode;
    fullWidth?: boolean;
}
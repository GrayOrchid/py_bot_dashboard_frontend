import type { ReactNode } from "react";

export interface DividerProps {
    children?: ReactNode;
    align?: 'left' | 'center' | 'right';
    color?: string;
    textColor?: string;
    weight?: string; 
    margin?: string; 
    fontSize?:string
}
import type { ElementType, ReactNode } from "react";

export interface ListItemProps {
  label: string;
  icon?: ReactNode;
  action?: ReactNode;
  className?: string;
  isActive?:boolean;
  onClick?: () => void;
}
 export interface ExtendedListItemProps extends ListItemProps {
    as?: ElementType;
    to?: string; 
}
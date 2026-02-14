export interface SurfaceProps {
  children: React.ReactNode;
  variant?: 'raised' | 'inset' | 'flat';
  fullWidth?: boolean;
  centered?: boolean;
  className?: string;
  style?:any
  onClick?: () => void;
}
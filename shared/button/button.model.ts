export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: buttonVariant;
  startIcon?: string;
  endIcon?: string;
}

export type buttonVariant = 'light' | 'dark' | 'outlined';

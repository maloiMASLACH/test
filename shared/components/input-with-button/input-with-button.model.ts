import { MouseEventHandler } from 'react';
import { InputProps } from '../input/input.model';

export interface InputWithButtonProps extends InputProps {
  onButtonClick?: MouseEventHandler<HTMLButtonElement>;
  color?: string;
}

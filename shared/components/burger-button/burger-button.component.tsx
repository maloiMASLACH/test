import clsx from 'clsx';
import { Wrapper } from './burger-button.styles';
import { BurgerButtonProps } from './burger-button.model';

export const BurgerButton: React.FC<BurgerButtonProps> = ({
  open = false,
  className,
  ...attributes
}) => (
  <Wrapper className={clsx(className, { open })} {...attributes}>
    <div />
    <div />
    <div />
  </Wrapper>
);

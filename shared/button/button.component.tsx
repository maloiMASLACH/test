import { ButtonProps } from './button.model';
import { Wrapper } from './button.styles';

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  startIcon,
  endIcon,
  ...buttonAttributes
}) => {
  return (
    <Wrapper variant={variant} {...buttonAttributes}>
      {startIcon && <img className="startIcon" src={startIcon} alt="startIcon" />}
      {children}
      {endIcon && <img className="endIcon" src={endIcon} alt="endIcon" />}
    </Wrapper>
  );
};

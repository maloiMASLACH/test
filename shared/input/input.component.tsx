import { InputProps } from './input.model';
import { StyledInput } from './input.styles';

export const Input: React.FC<InputProps> = (props) => {
  return <StyledInput {...props} />;
};

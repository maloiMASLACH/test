import { Input } from '..';
import { ArrowIcon } from '../icons';
import { Wrapper, ButtonInput } from './input-with-button.styles';
import { InputWithButtonProps } from './input-with-button.model';

export const InputWithButton: React.FC<InputWithButtonProps> = (props) => {
  const { color = '#FFFFFF', onButtonClick, className, ...inputProps } = props;

  return (
    <Wrapper className={className}>
      <Input {...inputProps} />
      <ButtonInput onClick={onButtonClick}>
        <ArrowIcon color={color} className="arrow-icon" />
        <ArrowIcon color={color} className="arrow-icon" />
      </ButtonInput>
    </Wrapper>
  );
};

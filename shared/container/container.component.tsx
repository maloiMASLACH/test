import { ContainerProps } from './container.model';
import { Wrapper } from './container.styles';

export const Container: React.FC<ContainerProps> = (props) => {
  const { children, ...divAttributes } = props;

  return <Wrapper {...divAttributes}>{children}</Wrapper>;
};

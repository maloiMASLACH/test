import { ContainerProps } from './container.model';
import { Wrapper } from './container.styles';

export const Container: React.FC<ContainerProps> = ({ children, ...divAttributes }) => (
  <Wrapper {...divAttributes}>{children}</Wrapper>
);

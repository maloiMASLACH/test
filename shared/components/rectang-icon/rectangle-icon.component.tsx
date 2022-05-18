import { RectangleIconProps } from './rectangle-icon.model';
import { Wrapper } from './rectangle-icon.styles';

export const RectangleIcon: React.FC<RectangleIconProps> = ({
  children,
  src,
  alt,
  ...divAttributes
}) => (
  <Wrapper {...divAttributes}>
    <img src={src} alt={alt} />
    {children}
  </Wrapper>
);

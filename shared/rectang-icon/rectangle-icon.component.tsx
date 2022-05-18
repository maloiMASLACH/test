import { RectangleIconProps } from './rectangle-icon.model';
import { Wrapper } from './rectangle-icon.styles';

export const RectangleIcon: React.FC<RectangleIconProps> = (props) => {
  const { children, src, alt, ...divAttributes } = props;

  return (
    <Wrapper {...divAttributes}>
      <img src={src} alt={alt} />
      {children}
    </Wrapper>
  );
};

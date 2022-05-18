import { images } from '../assets';
import { SocialIconProps } from './social-icon.model';
import { Wrapper } from './social-icon.styles';

export const SocialIcon: React.FC<SocialIconProps> = ({ variant, children, ...linkAttributes }) => (
  <Wrapper {...linkAttributes}>
    <img src={images[`${variant}BlackIcon`]} alt={variant} />
    {children}
  </Wrapper>
);

import { NavLinkProps } from './nav-link.model';
import { Wrapper } from './nav-link.styles';

export const NavLink: React.FC<NavLinkProps> = ({ children, ...linkAttributes }) => (
  <Wrapper {...linkAttributes}>{children}</Wrapper>
);

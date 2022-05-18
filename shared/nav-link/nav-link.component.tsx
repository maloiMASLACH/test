import { NavLinkProps } from './nav-link.model';
import { Wrapper } from './nav-link.styles';

export const NavLink: React.FC<NavLinkProps> = (props) => {
  const { children, ...linkAttributes } = props;

  return <Wrapper {...linkAttributes}>{children}</Wrapper>;
};

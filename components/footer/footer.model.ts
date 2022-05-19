import { SocialIconExternalProps } from '../../shared/components/social-icon/social-icon.model';
import { LinkExternalProps } from '../../shared/components/nav-link/nav-link.model';
export interface FooterProps {
  textContent?: string;
  secondColumnTitle?: string;
  thirdColumnTitle?: string;
  secondColumnLinks?: LinkExternalProps[];
  phones?: string[];
  emails?: string[];
  address?: LinkExternalProps;
  copyrightText?: string;
  socialNetworks?: SocialIconExternalProps[];
}

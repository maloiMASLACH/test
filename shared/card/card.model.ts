import { SocialIconExternalProps } from '../social-icon/social-icon.model';

export interface CardProps {
  children?: JSX.Element[];
  variant: cardVariant;
  title?: string;
  description?: string;
  imagePath: string;
  socialLinks?: SocialIconExternalProps[];
  userImagePath?: string;
  userName?: string;
  nftName?: string;
}

export type cardVariant = 'primary' | 'secondary' | 'light';

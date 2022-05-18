import { SocialIconExternalProps } from '../social-icon/social-icon.model';

export interface CardProps {
  id: number;
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

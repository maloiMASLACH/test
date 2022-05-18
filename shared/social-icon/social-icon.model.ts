export interface SocialIconProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant: SocialIconVariants;
}

export type SocialIconVariants =
  | 'facebook'
  | 'twitter'
  | 'instagram'
  | 'linkedin'
  | 'discord'
  | 'www';

export interface SocialIconExternalProps {
  variant: SocialIconVariants;
  link: string;
}

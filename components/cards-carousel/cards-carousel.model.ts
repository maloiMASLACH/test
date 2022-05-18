import { cardVariant } from '../../shared/card/card.model';
import { SocialIconExternalProps } from '../../shared/social-icon/social-icon.model';

export interface CardsCarouselProps {
  children?: JSX.Element[];
  blockTitle?: string;
  cardData: {
    id: number;
    title: string;
    description?: string;
    imagePath: string;
    socialLinks?: SocialIconExternalProps[];
  }[];
  cardType?: cardVariant;
}

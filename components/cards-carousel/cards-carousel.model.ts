import { CardProps, cardVariant } from '../../shared/components/card/card.model';
export interface CardsCarouselProps {
  blockTitle?: string;
  cardData: CardProps[];
  cardType?: cardVariant;
}

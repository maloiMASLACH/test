import { cardVariant } from '../../shared/components/card/card.model';

export interface BannerProps {
  children?: JSX.Element[];
  titleText: string;
  subTitleText: string;
  cardData: {
    id: number;
    userName: string;
    nftName: string;
    nftImagePath: string;
    userImagePath: string;
  }[];
}

import { cardVariant } from '../../shared/card/card.model';

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

export interface PopularCreatorsProps {
  children?: JSX.Element[];
  titleText: string;
  cardData: {
    id: number;
    title: string;
    description: string;
    imagePath: string;
  }[];
}

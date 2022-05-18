import { CardProps } from '../../../shared/components/card/card.model';
import ProjectImg1 from '../asserts/card-item-img-1.png';
import ProjectImg2 from '../asserts/card-item-img-2.png';
import ProjectImg3 from '../asserts/card-item-img-3.png';

export const projects: CardProps[] = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imagePath: ProjectImg1,
    variant: 'primary'
  },
  {
    id: 2,
    title: ' Project 2',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imagePath: ProjectImg2,
    variant: 'primary'
  },
  {
    id: 3,
    title: ' Project 3',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imagePath: ProjectImg3,
    variant: 'primary'
  }
];

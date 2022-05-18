import { CardProps } from '../../../shared/components/card/card.model';
import { SocialIconExternalProps } from '../../../shared/components/social-icon/social-icon.model';
import ProjectImg1 from '../asserts/card-item-img-1.png';
import ProjectImg2 from '../asserts/card-item-img-2.png';
import ProjectImg3 from '../asserts/card-item-img-3.png';

const socialLinks: SocialIconExternalProps[] = [
  { variant: 'twitter', link: '/' },
  { variant: 'www', link: '/' },
  { variant: 'discord', link: '/' }
];

export const comingProjects: CardProps[] = [
  {
    id: 1,
    title: 'Project 1',
    imagePath: ProjectImg1,
    socialLinks,
    variant: 'light'
  },
  {
    id: 2,
    title: ' Project 2',
    imagePath: ProjectImg2,
    socialLinks,
    variant: 'light'
  },
  {
    id: 3,
    title: ' Project 3',
    imagePath: ProjectImg3,
    socialLinks,
    variant: 'light'
  }
];

import { SocialIconExternalProps } from '../../../shared/social-icon/social-icon.model';
import ProjectImg1 from '../asserts/card-item-img-1.png';
import ProjectImg2 from '../asserts/card-item-img-2.png';
import ProjectImg3 from '../asserts/card-item-img-3.png';

const socialLinks: SocialIconExternalProps[] = [
  { variant: 'twitter', link: '/' },
  { variant: 'www', link: '/' },
  { variant: 'discord', link: '/' }
];

export const comingProjects = [
  {
    id: 1,
    title: 'Project q',
    imagePath: ProjectImg1,
    socialLinks
  },
  {
    id: 2,
    title: ' Project 2',
    imagePath: ProjectImg2,
    socialLinks
  },
  {
    id: 3,
    title: ' Project 3',
    imagePath: ProjectImg3,
    socialLinks
  }
];

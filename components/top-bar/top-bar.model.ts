import { LinkExternalProps } from '../../shared/components/nav-link/nav-link.model';

export interface TopBarProps {
  variant?: 'guest' | 'connected' | 'search';
  links?: LinkExternalProps[];
  logo?: string;
  announcementText?: string;
}

export const enum TopBarVariants {
  Guest = 'guest',
  Connected = 'connected',
  Search = 'search'
}

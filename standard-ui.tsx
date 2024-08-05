import styled from 'styled-components';
// import PopularCreators from './components/popular-creators/popular-creators.component';
// import RecentlyLaunched from './components/recently-launched/recently-launched.component';
import { Footer, TopNftProjects } from '../';

import { FooterProps } from './components/footer/footer.model';
import { images } from './shared';
import { CardsCarousel } from './components/cards-carousel';
import { CardsCarouselProps } from './components/cards-carousel/cards-carousel.model';
import { TopNftProjectsProps } from './components/top-nft-projects/top-nft-projects.model';
import { creators } from './components/popular-creators/mock-data/data';
import { projects } from './components/recently-launched/mock-data/data';
import { comingProjects } from './components/coming-soon/mock-data/data';
import { Banner } from './components/banner/banner.component';
import { bannerCard } from './components/banner/mock-data/data';
import { OpenThetaProps } from './components/open-theta/open-theta.model';
import { openThetaCard } from './components/open-theta/mock-data/data';
import { OpenTheta } from './components/open-theta/open-theta.component';
import { HeaderProps } from './components/header/header.model';
import { Header } from './components/header/header.component';

export interface StandardUiProps {
  config?: UiConfig;
}

export interface UiConfig {
  header?: HeaderProps;
  popularCreators?: CardsCarouselProps;
  recentlyLaunched?: CardsCarouselProps;
  comingSoon?: CardsCarouselProps;
  topNftProjects?: TopNftProjectsProps;
  footer?: FooterProps;
  openTheta?: OpenThetaProps;
}

const StyledStandardUi = styled.div`
  color: red;
  background: #0e1457;
`;

const defaultConfig: UiConfig = {
  header: {
    topBar: {
      variant: 'guest',
      links: [
        { link: '/', title: 'Home' },
        { link: '/', title: 'Explore' },
        { link: '/', title: 'Stats' },
        { link: '/', title: 'MyNFTs' }
      ],
      announcementText: 'Test',
      logo: images.logo
    },
    banner: {
      titleText: 'Discover, Collect, And Trade Unique NFTs ',
      subTitleText:
        'Opentheta.io is the first independently and public marketplace on the Theta blockchain. We are the home of ThetaPunks and many other projects',
      cardData: bannerCard
    }
  },
  openTheta: {
    titleText: 'OpenTheta in numbers',
    cardData: openThetaCard
  },
  comingSoon: {
    blockTitle: 'Coming Soon',
    cardData: comingProjects,
    cardType: 'light'
  },
  recentlyLaunched: {
    blockTitle: 'Recently Launched',
    cardData: projects,
    cardType: 'primary'
  },
  popularCreators: {
    blockTitle: 'Popular Creators',
    cardData: creators,
    cardType: 'secondary'
  },
  topNftProjects: {
    mobileTitleText: 'Top NFTs Projects mobile',
    laptopTitleText: 'Top NFTs Projects',
    subTitleLargeView: 'Wapapa',
    subtitleSmallView: 'Wapapa mobile'
  },
  footer: {
    textContent: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    secondColumnTitle: 'Company',
    thirdColumnTitle: 'Contact Us',
    secondColumnLinks: [
      { link: '/', title: 'About Us' },
      { link: '/', title: 'Roadmap' },
      { link: '/', title: 'Become a creator' }
    ],
    phones: ['+625 8569 652', '(321) 5286 362'],
    emails: ['contact@opentheta.io', 'contact@opentheta.io'],
    address: { title: '123 Street fort view avenue #1403 Las Vegas, Nevada 25635-4000', link: '/' },
    copyrightText: `© ${new Date().getFullYear()} Copyright | All Right Reserved By OpenTheta`,
    socialNetworks: [
      { variant: 'facebook', link: '/' },
      { variant: 'twitter', link: '/' },
      { variant: 'instagram', link: '/' },
      { variant: 'linkedin', link: '/' },
      { variant: 'discord', link: '/' }
    ]
  }
};

function mapConfigToJsx(config: UiConfig): JSX.Element[] {
  return Object.entries(config).map(
    ([component, props]: [string, HeaderProps | FooterProps | any]) => {
      const componentsObj = {
        footer: <Footer {...props} />,
        header: <Header {...props} />,
        banner: <Banner {...props} />,
        popularCreators: <CardsCarousel {...props} />,
        recentlyLaunched: <CardsCarousel {...props} />,
        comingSoon: <CardsCarousel {...props} />,
        openTheta: <OpenTheta {...props} />
      };
      return componentsObj[
        component as
          | 'footer'
          | 'header'
          | 'popularCreators'
          | 'recentlyLaunched'
          | 'comingSoon'
          | 'openTheta'
      ];
    }
  );
}

export function StandardUi(props: StandardUiProps) {
  const { config = defaultConfig } = props;
  return <StyledStandardUi>{mapConfigToJsx(config)}</StyledStandardUi>;
}

export default StandardUi;

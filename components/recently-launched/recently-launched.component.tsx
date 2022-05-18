import React, { useState, useEffect } from 'react';
import { projects } from './mock-data/data';
import { customTheme } from '../../shared/theme/custom-theme.model';
import Carousel from '../../shared/components/carousel/carousel.component';
import Card from '../../shared/components/card/card.component';
import { RecentlyLaunchedProps } from './recently-launched.model';
import { Wrapper, Title, Span, CardsWrapper } from './recently-launched.styles';
import { BlockTitle } from '../../shared/components/block-title/block-title.component';
import { title } from 'process';

const RecentlyLaunchedComponent: React.FC<RecentlyLaunchedProps> = ({ titleText }) => {
  const { breakpoints } = customTheme;
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <Wrapper>
      {dimensions.width <= breakpoints.values.md ? (
        <>
          {titleText && <BlockTitle text={titleText} />}
          <Carousel>
            {projects.map(({ id, title, description, imagePath }) => (
              <Card
                key={id}
                id={id}
                variant="primary"
                title={title}
                description={description}
                imagePath={imagePath}
              />
            ))}
          </Carousel>
        </>
      ) : (
        <>
          {titleText && <BlockTitle text={titleText} />}
          <CardsWrapper>
            {projects.map(({ id, title, description, imagePath }) => (
              <Card
                key={id}
                id={id}
                variant="primary"
                title={title}
                description={description}
                imagePath={imagePath}
              />
            ))}
          </CardsWrapper>
        </>
      )}
    </Wrapper>
  );
};

export const RecentlyLaunched = React.memo(RecentlyLaunchedComponent);

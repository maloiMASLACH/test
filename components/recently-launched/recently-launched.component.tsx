import React, { useState, useEffect } from 'react';
import { projects } from './mock-data/data';
import { customTheme } from '../../shared/theme/custom-theme.model';
import Carousel from '../../shared/carousel/carousel.component';
import Card from '../../shared/card/card.component';
import { RecentlyLaunchedProps } from './recently-launched.model';
import { Wrapper, Title, Span, CardsWrapper } from './recently-launched.styles';
import { BlockTitle } from '../../shared/block-title/block-title.component';
import { title } from 'process';

const RecentlyLaunchedComponent: React.FC<RecentlyLaunchedProps> = (props) => {
  const { titleText, ...attributes } = props;
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
            {projects.map((project) => (
              <Card
                key={project.id}
                variant="primary"
                title={project.title}
                description={project.description}
                imagePath={project.imagePath}
              />
            ))}
          </Carousel>
        </>
      ) : (
        <>
          {titleText && <BlockTitle text={titleText} />}
          <CardsWrapper>
            {projects.map((project) => (
              <Card
                key={project.id}
                variant="primary"
                title={project.title}
                description={project.description}
                imagePath={project.imagePath}
              />
            ))}
          </CardsWrapper>
        </>
      )}
    </Wrapper>
  );
};

export const RecentlyLaunched = React.memo(RecentlyLaunchedComponent);

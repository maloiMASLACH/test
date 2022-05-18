import React, { useState, useEffect } from 'react';
import { customTheme } from '../../shared/theme/custom-theme.model';
import Carousel from '../../shared/carousel/carousel.component';
import Card from '../../shared/card/card.component';
import { ComingSoonProps } from './coming-soon.model';
import { Wrapper, Title, Span, CardsWrapper } from './coming-soon.styles';
import { BlockTitle } from '../../shared/block-title/block-title.component';
import { comingProjects } from './mock-data/data';

const ComingSoonComponent: React.FC<ComingSoonProps> = (props) => {
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
            {comingProjects.map((project) => (
              <Card
                key={project.id}
                variant="light"
                title={project.title}
                imagePath={project.imagePath}
                socialLinks={project.socialLinks}
              />
            ))}
          </Carousel>
        </>
      ) : (
        <>
          {titleText && <BlockTitle text={titleText} />}
          <CardsWrapper>
            {comingProjects.map((project) => (
              <Card
                key={project.id}
                variant="light"
                title={project.title}
                imagePath={project.imagePath}
                socialLinks={project.socialLinks}
              />
            ))}
          </CardsWrapper>
        </>
      )}
    </Wrapper>
  );
};

export const ComingSoon = React.memo(ComingSoonComponent);

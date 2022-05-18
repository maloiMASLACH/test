import React from 'react';
import Carousel from '../../shared/carousel/carousel.component';
import Card from '../../shared/card/card.component';
import { CardsCarouselProps } from './cards-carousel.model';
import { Wrapper } from './cards-carousel.styles';
import { BlockTitle } from '../../shared/block-title/block-title.component';

export const CardsCarousel: React.FC<CardsCarouselProps> = (props) => {
  const { blockTitle, cardData, cardType } = props;

  return (
    <Wrapper>
      {blockTitle && <BlockTitle text={blockTitle} />}
      <Carousel>
        {cardData.map((project) => (
          <Card
            key={project.id}
            variant={cardType ?? 'primary'}
            title={project.title}
            description={project.description}
            imagePath={project.imagePath}
            socialLinks={project.socialLinks}
          />
        ))}
      </Carousel>
    </Wrapper>
  );
};

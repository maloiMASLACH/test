import React from 'react';
import Carousel from '../../shared/components/carousel/carousel.component';
import Card from '../../shared/components/card/card.component';
import { CardsCarouselProps } from './cards-carousel.model';
import { Wrapper } from './cards-carousel.styles';
import { BlockTitle } from '../../shared/components/block-title/block-title.component';

export const CardsCarousel: React.FC<CardsCarouselProps> = ({ blockTitle, cardData, cardType }) => (
  <Wrapper>
    {blockTitle && <BlockTitle text={blockTitle} />}
    <Carousel>
      {cardData.map(({ id, title, description, imagePath, socialLinks }) => (
        <Card
          key={id}
          id={id}
          variant={cardType ?? 'primary'}
          title={title}
          description={description}
          imagePath={imagePath}
          socialLinks={socialLinks}
        />
      ))}
    </Carousel>
  </Wrapper>
);

import { creators } from '../popular-creators/mock-data/data';
import Carousel from '../../shared/carousel/carousel.component';
import Card from '../../shared/card/card.component';
import { PopularCreatorsProps } from './popular-creators.model';
import { Wrapper } from './popular-creators.styles';
import React from 'react';
import { BlockTitle } from '../../shared/block-title/block-title.component';

const PopularCreatorsComponent: React.FC<PopularCreatorsProps> = (props) => {
  const { children, titleText, ...attributes } = props;
  return (
    <Wrapper>
      {titleText && <BlockTitle text={titleText} />}
      {creators && (
        <Carousel>
          {creators.map((creator) => (
            <Card
              key={creator.id}
              variant="secondary"
              title={creator.title}
              description={creator.description}
              imagePath={creator.imagePath}
            />
          ))}
        </Carousel>
      )}
    </Wrapper>
  );
};

export const PopularCreators = React.memo(PopularCreatorsComponent);

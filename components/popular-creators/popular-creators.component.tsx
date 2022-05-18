import { creators } from '../popular-creators/mock-data/data';
import Carousel from '../../shared/components/carousel/carousel.component';
import Card from '../../shared/components/card/card.component';
import { PopularCreatorsProps } from './popular-creators.model';
import { Wrapper } from './popular-creators.styles';
import React from 'react';
import { BlockTitle } from '../../shared/components/block-title/block-title.component';

const PopularCreatorsComponent: React.FC<PopularCreatorsProps> = ({ titleText, ...attributes }) => {
  return (
    <Wrapper>
      {titleText && <BlockTitle text={titleText} />}
      {creators && (
        <Carousel>
          {creators.map(({id, title, description, imagePath}) => (
            <Card
              key={id}
              id={id}
              variant="secondary"
              title={title}
              description={description}
              imagePath={imagePath}
            />
          ))}
        </Carousel>
      )}
    </Wrapper>
  );
};

export const PopularCreators = React.memo(PopularCreatorsComponent);

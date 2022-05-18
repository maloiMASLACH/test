import React from 'react';
import { BlockTitle } from '../../shared/block-title/block-title.component';
import { CardOpenTheta } from '../../shared/open-theta-card/card-open-theta.component';
import { OpenThetaProps } from './open-theta.model';
import { CardDataContainer, Wrapper } from './open-theta.styles';

export const OpenTheta: React.FC<OpenThetaProps> = React.memo((props) => {
  const { cardData, titleText } = props;

  return (
    <Wrapper>
      {titleText && <BlockTitle text={titleText} variant="secondary" />}
      <CardDataContainer>
        {cardData &&
          cardData.map((cardItem, index) => {
            return (
              <CardOpenTheta
                key={index}
                iconPath={cardItem.icon}
                amount={cardItem.amount}
                description={cardItem.description}
              ></CardOpenTheta>
            );
          })}
      </CardDataContainer>
    </Wrapper>
  );
});

import React from 'react';
import { BlockTitle } from '../../shared/components/block-title/block-title.component';
import { CardOpenTheta } from '../../shared/components/open-theta-card/card-open-theta.component';
import { OpenThetaProps } from './open-theta.model';
import { CardDataContainer, Wrapper } from './open-theta.styles';

export const OpenTheta: React.FC<OpenThetaProps> = React.memo((props) => {
  const { cardData, titleText } = props;

  return (
    <Wrapper>
      {titleText && <BlockTitle text={titleText} variant="secondary" />}
      <CardDataContainer>
        {cardData &&
          cardData.map(({icon, amount, description}, index) => {
            return (
              <CardOpenTheta
                key={index}
                iconPath={icon}
                amount={amount}
                description={description}
              ></CardOpenTheta>
            );
          })}
      </CardDataContainer>
    </Wrapper>
  );
});

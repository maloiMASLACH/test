import React from 'react';
import { CardProps } from './card-open-theta.model';
import { Line, Wrapper, Span, CardContainer, IconContainer, Icon } from './card-open-theta.styles';
export const CardOpenTheta: React.FC<CardProps> = React.memo(
  ({ description, amount, iconPath }) => {
    return (
      <Wrapper margin="0 8px">
        <CardContainer>
          {iconPath ? (
            <IconContainer>
              <Icon src={iconPath} alt="Coin Image"></Icon>
              <Span>{description}</Span>
            </IconContainer>
          ) : (
            <Span>{description}</Span>
          )}
          <Line />
          <Span>{amount}</Span>
        </CardContainer>
      </Wrapper>
    );
  }
);

import React from 'react';
import { Button } from '../../shared';
import { CardBanner } from '../../shared/card-banner/card-banner.component';
import { BannerProps } from './banner.model';
import { Container, Wrapper, SubtitleLargeView, LeftSide, RightSide } from './banner.styles';
import { BlockTitle } from './components/block-title/block-title.component';

export const Banner: React.FC<BannerProps> = React.memo((props) => {
  const { titleText, subTitleText, cardData } = props;
  return (
    <Wrapper>
      <Container>
        <LeftSide>
          {titleText && <BlockTitle text={titleText} />}
          <SubtitleLargeView>{subTitleText}</SubtitleLargeView>
          <Button>Explore</Button>
        </LeftSide>
        <RightSide>
          {cardData.map((cardItem) => (
            <CardBanner
              key={cardItem.id}
              nftName={cardItem.nftName}
              nftImagePath={cardItem.nftImagePath}
              userName={cardItem.userName}
              userImagePath={cardItem.userImagePath}
            />
          ))}
        </RightSide>
      </Container>
    </Wrapper>
  );
});

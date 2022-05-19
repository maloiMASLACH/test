import React from 'react';
import { Button } from '../../shared';
import { CardBanner } from '../../shared/components/card-banner/card-banner.component';
import { BannerProps } from './banner.model';
import { Container, Wrapper, SubtitleLargeView, LeftSide, RightSide } from './banner.styles';
import { BlockTitle } from './components/block-title/block-title.component';

export const Banner: React.FC<BannerProps> = React.memo(({ titleText, subTitleText, cardData }) => (
  <Wrapper>
    <Container>
      <LeftSide>
        {titleText && <BlockTitle text={titleText} />}
        <SubtitleLargeView>{subTitleText}</SubtitleLargeView>
        <Button>Explore</Button>
      </LeftSide>
      <RightSide>
        {cardData.map(({ id, nftName, nftImagePath, userName, userImagePath }) => (
          <CardBanner
            key={id}
            nftName={nftName}
            nftImagePath={nftImagePath}
            userName={userName}
            userImagePath={userImagePath}
          />
        ))}
      </RightSide>
    </Container>
  </Wrapper>
));

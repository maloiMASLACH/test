import React from 'react';
import { CardProps } from './card-banner.model';
import {
  CardButton,
  Content,
  Icon,
  NftNameContainer,
  UserNameContainer,
  Wrapper,
  Img,
  InfoContainer,
  UserDataContainer
} from './card-banner.styles';
export const CardBanner: React.FC<CardProps> = React.memo(
  ({ nftImagePath, userImagePath, userName, nftName }) => {
    return (
      <Wrapper margin="0 8px">
        <Content>
          <Img src={nftImagePath}></Img>
          <InfoContainer>
            <NftNameContainer>{nftName}</NftNameContainer>
            <UserDataContainer>
              {' '}
              <UserNameContainer>{userName}</UserNameContainer>
              <Icon src={userImagePath} alt="User image"></Icon>
            </UserDataContainer>
          </InfoContainer>
          <CardButton variant="dark">Show collection</CardButton>
        </Content>
      </Wrapper>
    );
  }
);

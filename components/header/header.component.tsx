import React from 'react';
import { Banner } from '../banner';
import { TopBar } from '../top-bar';

import { HeaderProps } from './header.model';
import { Wrapper } from './header.styles';

export const Header: React.FC<HeaderProps> = ({ topBar, banner }) => {
  return (
    <Wrapper>
      <TopBar {...topBar}></TopBar>
      <Banner {...banner}></Banner>
    </Wrapper>
  );
};

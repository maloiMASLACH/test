import React, { useMemo, useState } from 'react';
import clsx from 'clsx';
import { Button, NavLink, BurgerButton, SearchIcon, AnnouncementBar, images } from '../../shared';
import { TopBarVariants, TopBarProps } from './top-bar.model';
import { HeaderBlock, Wrapper } from './top-bar.styles';
import { useModel } from '../../hooks/useModel';

export const TopBar: React.FC<TopBarProps> = React.memo(
  ({ variant = TopBarVariants.Guest, links, logo = images.logo, announcementText }) => {
    const [modelOpen, toggle]= useModel(false);

    const { isConnected, isGuest, isSearch } = useMemo(
      () => ({
        isConnected: variant === TopBarVariants.Connected,
        isSearch: variant === TopBarVariants.Search,
        isGuest: variant === TopBarVariants.Guest
      }),
      [variant]
    );

    return (
      <HeaderBlock>
        {announcementText && (
          <AnnouncementBar
            variant={!isConnected ? 'light' : 'dark'}
            textContent={announcementText}
          />
        )}

        <Wrapper>
          <img className="logo" src={logo} alt="logo" />

          <div onClick={toggle} className={clsx('nav-links', { opened: modelOpen })}>
            {isSearch && <SearchIcon className="search mobile" />}
            {links?.length &&
              links.map(({ link, title }) => <NavLink href={link}>{title}</NavLink>)}
          </div>

          {(isGuest || isSearch) && (
            <div className={clsx({ controls: isSearch })}>
              {isSearch && <SearchIcon className="search desktop" />}
              <Button className="button" startIcon={images.connectImgDark}>
                Connect
              </Button>
            </div>
          )}

          {isConnected && (
            <div className="connected-controls">
              <span>12,233</span>
              <img src={images.priceIcon} alt="price" />
              <Button variant="dark" className="button" startIcon={images.walletImgLight}>
                <span>0xC4...4C0243Eb</span>
              </Button>
            </div>
          )}

          <BurgerButton className="burger" open={modelOpen} onClick={toggle} />
        </Wrapper>
      </HeaderBlock>
    );
  }
);

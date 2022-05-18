import React, { useEffect, useMemo, useState } from 'react';
import { adaptiveColumns, columnTitles, rowTitles } from './components/table/table.config';
import { Select } from './components/select';
import { Button, customTheme } from '../../shared';
import { TopNftProjectsProps } from './top-nft-projects.model';
import collectionIcon from './assets/collection.svg';
import { Table } from './components/table';
import priceIcon from './assets/price.svg';
import {
  ButtonWrapper,
  SelectWrapper,
  SubtitleLargeView,
  SubtitleSmallView,
  TopNftProjectsWrapper,
  Span
} from './top-nft-projects.styles';
import { IconCollection, IconContainer, IconPrice, Percent } from './components/table/table.styles';
import { BlockTitle } from '../banner/components/block-title/block-title.component';

const setRowData = () => {
  return rowTitles.map(
    ({ collection, volume, dailyPercent, weekPercent, floorPrice, ...rest }) => ({
      collection: (
        <>
          <IconContainer>
            <IconCollection src={collectionIcon} />
          </IconContainer>
          {collection}
        </>
      ),
      volume: (
        <>
          <IconPrice src={priceIcon} />
          {volume}
        </>
      ),
      dailyPercent: <Percent>{dailyPercent}</Percent>,
      weekPercent: <Percent>{weekPercent}</Percent>,
      floorPrice: (
        <>
          <IconPrice src={priceIcon} />
          {floorPrice}
        </>
      ),
      ...rest
    })
  );
};

const TopNftProjectsComponent: React.FC<TopNftProjectsProps> = ({
  subTitleLargeView,
  subtitleSmallView,
  buttonText,
  mobileTitleText,
  laptopTitleText
}) => {
  const data = useMemo(() => setRowData(), []);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  const { breakpoints } = customTheme;

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return (
    <TopNftProjectsWrapper>
      {dimensions.width <= breakpoints.values.md ? (
        <BlockTitle text={mobileTitleText} />
      ) : (
        <BlockTitle text={laptopTitleText} />
      )}

      {subTitleLargeView && <SubtitleLargeView>{subTitleLargeView}</SubtitleLargeView>}
      {subtitleSmallView && <SubtitleSmallView>{subtitleSmallView}</SubtitleSmallView>}

      <SelectWrapper>
        <Select title="7 days" />
        <Select title="All Categories" />
      </SelectWrapper>

      <Table columns={columnTitles} adaptiveColumns={adaptiveColumns} rows={data} />

      <ButtonWrapper>
        <Button variant="dark" className="Button">
          {buttonText ?? 'Load More'}
        </Button>
      </ButtonWrapper>
    </TopNftProjectsWrapper>
  );
};

export const TopNftProjects = React.memo(TopNftProjectsComponent);

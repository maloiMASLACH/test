import React, { useState, useEffect } from 'react';
import { RenderArrowProps } from 'react-elastic-carousel';
import { CarouselProps } from './carousel.model';
import { Wrapper, CarouselWrapper, CardsWrapper } from './carousel.styles';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3, itemsToScroll: 3 },
  { width: 1200, itemsToShow: 3, itemsToScroll: 3 }
];

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });
  const [disableCarousel, setDisableCarousel] = useState(false);

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
  }, []);

  useEffect(() => {
    const smallerBreakpoints = breakPoints.filter((point) => point.width <= dimensions.width);
    if (
      smallerBreakpoints[smallerBreakpoints.length - 1]?.itemsToShow >=
      React.Children.count(children)
    ) {
      setDisableCarousel(true);
    } else {
      setDisableCarousel(false);
    }
  }, [dimensions]);

  return (
    <Wrapper>
      {disableCarousel ? (
        <CardsWrapper>{children}</CardsWrapper>
      ) : (
        <CarouselWrapper breakPoints={breakPoints} isRTL={false}>
          {children}
        </CarouselWrapper>
      )}
    </Wrapper>
  );
};

export default Carousel;

import styled, { css } from 'styled-components';
import Carousel from 'react-elastic-carousel';
import { parseObjToCSS } from '../theme';

const CarouselWrapper = styled(Carousel)`
  ${({ theme, breakPoints }) => {
    const { breakpoints } = theme;
    const arrowButtonStyles = theme.components.carouselButton.styles;
    const paginationButtonStyles = theme.components.carouselPaginationButton.styles;
    const paginationButtonActiveStyles = theme.components.carouselPaginationButton.variants.active;

    return css`
      .rec.rec-arrow {
        position: absolute;
        bottom: 0;
        ${parseObjToCSS(arrowButtonStyles)}
      }

      .rec.rec-arrow:hover {
        transform: scale(1.1);
      }

      .rec-arrow-right {
        right: 0;
      }

      .rec.rec-pagination {
        margin-top: 60px;
        padding-bottom: 16px;

        @media (max-width: ${breakpoints.values.md}${breakpoints.unit}) {
          margin-top: 30px;
          padding: 0px 55px 8px 55px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      .rec.rec-pagination button {
        margin-bottom: 8px;
        padding-left: 29px;
        height: 3px;
        ${parseObjToCSS(paginationButtonStyles)}

        @media (min-width: ${breakpoints.values.md}${breakpoints.unit}) {
          height: 6px;
          margin: 0 14px;
        }
      }

      .rec.rec-pagination button:hover {
        box-shadow: none;
        transform: scale(1.1);
      }

      .rec.rec-dot_active {
        box-shadow: none;
        ${parseObjToCSS(paginationButtonActiveStyles)}
      }
    `;
  }}
`;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export { Wrapper, CarouselWrapper, CardsWrapper };

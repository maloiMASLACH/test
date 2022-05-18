import styled, { css } from 'styled-components';

export const CellWrapper = styled.div`
  ${({ theme }) => {
    const { breakpoints } = theme;
    const { smallTitle, smallSubtitle } = theme.typography.fontSize;

    return css`
      width: 13.75%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &:first-child {
        width: 25%;
        margin-right: 10px;

        @media (max-width: ${breakpoints.values.sm}${breakpoints.unit}) {
          width: 95%;
          grid-area: main;
          font-size: ${smallSubtitle};
        }
      }

      &:nth-child(2) {
        @media (max-width: ${breakpoints.values.sm}${breakpoints.unit}) {
          grid-area: lower;
          font-size: ${smallTitle};
          letter-spacing: 1px;
          padding-bottom: 20px;
        }
      }

      &:nth-child(3) {
        @media (max-width: ${breakpoints.values.md}${breakpoints.unit}) {
          text-align: center;
        }
        @media (max-width: ${breakpoints.values.sm}${breakpoints.unit}) {
          grid-area: upper;
          letter-spacing: 1px;
          font-size: ${smallTitle};
          padding-top: 20px;
        }
      }

      @media (max-width: ${breakpoints.values.sm}${breakpoints.unit}) {
        width: 100%;
      }
    `;
  }}
`;

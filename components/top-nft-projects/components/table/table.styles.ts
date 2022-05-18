import styled, { css } from 'styled-components';
import checkIcon from '../../assets/check.svg';

export const TableContainer = styled.section`
  ${({ theme }) => {
    const { breakpoints } = theme;
    const { secondaryLight } = theme.palette.background;
    const { smallSubtitle } = theme.typography.fontSize;

    return css`
      font-size: 1.5em;

      @media (max-width: ${breakpoints.values.lg}${breakpoints.unit}) {
        font-size: 1.1em;
      }

      @media (max-width: ${breakpoints.values.md}${breakpoints.unit}) {
        font-size: 0.9em;
      }

      @media (max-width: ${breakpoints.values.sm}${breakpoints.unit}) {
        background: ${secondaryLight};
        border-radius: 19px;
        font-size: ${smallSubtitle};
      }
    `;
  }}
`;

export const RowsWrapper = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const IconContainer = styled.picture`
  ${({ theme }) => {
    const { breakpoints } = theme;

    return css`
      position: relative;

      @media (max-width: ${breakpoints.values.sm}${breakpoints.unit}) {
        &::after {
          content: '';
          display: block;
          position: absolute;
          width: 25px;
          height: 25px;
          background: url('${checkIcon}') no-repeat;
          background-size: contain;
          top: 24px;
          left: 34px;
        }
    `;
  }}
`;

export const IconCollection = styled.img`
  ${({ theme }) => {
    const { breakpoints } = theme;

    return css`
      position: relative;
      top: 0;
      left: 0;
      padding-right: 1em;

      @media (max-width: ${breakpoints.values.xl}${breakpoints.unit}) {
        padding-right: 0.5em;
      }

      @media (max-width: ${breakpoints.values.lg}${breakpoints.unit}) {
        width: 52px;
      }

      @media (max-width: ${breakpoints.values.sm}${breakpoints.unit}) {
        width: 46px;
        padding-right: 20px;
      }
    `;
  }}
`;

export const IconPrice = styled.img`
  ${({ theme }) => {
    const { breakpoints } = theme;

    return css`
      position: relative;
      padding-right: 0.3em;

      @media (max-width: ${breakpoints.values.lg}${breakpoints.unit}) {
        width: 20px;
        height: 18px;
        padding-right: 0.1em;
      }

      @media (max-width: ${breakpoints.values.sm}${breakpoints.unit}) {
        padding-right: 6px;
      }
    `;
  }}
`;

export const Percent = styled.p`
  ${({ theme, children }) => {
    const { primary } = theme.palette.text;
    const { negative, positive } = theme.palette.secondary;

    let color = primary;

    if (typeof children === 'string') {
      const isNegative = children.startsWith('-');

      color = isNegative ? negative : positive;
    }

    return css`
      margin: 0;
      color: ${color};
    `;
  }}
`;

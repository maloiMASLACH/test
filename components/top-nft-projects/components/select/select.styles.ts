import styled, { css } from 'styled-components';

export const SelectContainer = styled.div`
  ${({ theme }) => {
    const { breakpoints } = theme;
    const { secondaryLight } = theme.palette.background;

    return css`
      padding: 0 9em;
      height: 4em;
      background: ${secondaryLight};
      border-radius: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5em;
      cursor: pointer;

      @media (max-width: ${breakpoints.values.xl}${breakpoints.unit}) {
        padding: 0 6em;
      }

      @media (max-width: ${breakpoints.values.lg}${breakpoints.unit}) {
        padding: 0 3em;
      }

      @media (max-width: ${breakpoints.values.md}${breakpoints.unit}) {
        padding: 0 2em;
        height: 3em;
      }

      @media (max-width: ${breakpoints.values.sm}${breakpoints.unit}) {
        padding: 0 1em;
        font-size: 0.9em;
        border-radius: 12px;
      }
    `;
  }}
`;

export const Icon = styled.img`
  ${({ theme }) => {
    const { breakpoints } = theme;

    return css`
      margin-left: 0.8em;

      @media (max-width: ${breakpoints.values.md}${breakpoints.unit}) {
        margin-left: 0.5em;
      }

      @media (max-width: ${breakpoints.values.sm}${breakpoints.unit}) {
        margin-left: 0.4em;
        width: 14px;
      }

      @media (max-width: ${breakpoints.values.xs}${breakpoints.unit}) {
        width: 11px;
      }
    `;
  }}
`;

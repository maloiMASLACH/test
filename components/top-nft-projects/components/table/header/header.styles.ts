import styled, { css } from 'styled-components';

export const TableHeaderWrapper = styled.div`
  ${({ theme }) => {
    const { breakpoints } = theme;
    const { main } = theme.palette.secondary;

    return css`
      display: flex;
      justify-content: space-around;
      padding-bottom: 2em;
      padding-left: 1em;

      @media (max-width: ${breakpoints.values.xl}${breakpoints.unit}) {
        div:first-child {
          justify-content: flex-start;
        }
      }

      @media (max-width: ${breakpoints.values.md}${breakpoints.unit}) {
        padding-bottom: 1em;
      }

      @media (max-width: ${breakpoints.values.sm}${breakpoints.unit}) {
        display: inline-block;
        margin: 0;
        padding: 23px 0 0 19px;
        font-size: 1.5em;
        color: ${main};
        letter-spacing: 1px;

        &:first-letter {
          text-transform: capitalize;
        }
      }
      }
    `;
  }}
`;

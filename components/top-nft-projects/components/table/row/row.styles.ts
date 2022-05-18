import styled, { css } from 'styled-components';

export const RowContainer = styled.li`
  ${({ theme }) => {
    const { breakpoints } = theme;
    const { secondaryLight } = theme.palette.background;
    const { light } = theme.palette.secondary;

    return css`
      display: flex;
      justify-content: space-around;
      margin-bottom: 12px;
      border-radius: 25px;
      background: ${secondaryLight};
      height: 155px;
      padding-left: 1em;

      @media (max-width: ${breakpoints.values.lg}${breakpoints.unit}) {
        height: 100px;
      }

      @media (max-width: ${breakpoints.values.sm}${breakpoints.unit}) {
        display: grid;
        grid-template-columns: 1.5fr 0.5fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas:
          'main upper'
          'main lower';

        margin: 0 16px;
        padding-left: 0;
        border-radius: 0;
        height: 99px;

        &:not(:last-child) {
          border-bottom: 1px dashed ${light};
        }
      }
    `;
  }}
`;

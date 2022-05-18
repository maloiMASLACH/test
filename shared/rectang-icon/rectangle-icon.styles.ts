import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => {
    const { main } = theme.palette.icons;

    return css`
      width: 35px;
      height: 35px;

      background: ${main};
      border-radius: 5px;

      display: flex;
      align-items: center;
      justify-content: center;
    `;
  }}
`;

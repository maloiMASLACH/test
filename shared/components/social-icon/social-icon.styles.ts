import styled, { css } from 'styled-components';

export const Wrapper = styled.a`
  ${({ theme }) => {
    const { transitions } = theme;
    const { main, light } = theme.palette.icons;

    return css`
      transition: ${transitions.normal};
      cursor: pointer;

      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      background: ${light};

      &:hover {
        transform: scale(1.1);

        background: ${main};
      }
    `;
  }}
`;

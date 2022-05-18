import styled, { css } from 'styled-components';
import { parseObjToCSS, parseMedia } from '../../theme';

export const Wrapper = styled.button`
  ${({ theme }) => {
    const { transitions } = theme;
    const { background } = theme.palette;
    const { styles, media } = theme.components.searchIcon;

    return css`
      border: none;
      outline: none;
      width: 70px;
      height: 70px;
      position: relative;
      background: transparent;
      margin: 2%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      transition: ${transitions.normal};

      ${parseObjToCSS(styles)}

      & * {
        position: relative;
      }

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 50%;

        background: rgb(225, 225, 225, 0.1);
        box-shadow: 39px 55px 156px ${background.extraDark};
        backdrop-filter: blur(9px);
        transition: ${transitions.normal};
      }

      &:hover:before {
        transform: scale(1.05);
      }

      ${parseMedia(media)}
    `;
  }}
`;

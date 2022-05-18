import styled, { css } from 'styled-components';
import { ButtonProps } from './button.model';
import { parseMedia, parseObjToCSS } from '../../theme';

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, variant }) => {
    const variantStyles = theme.components.button.variant[variant || 'light'];
    const { styles, media } = theme.components.button;
    const { typography, transitions } = theme;

    return css`
      box-sizing: border-box;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      background: transparent;
      overflow: hidden;
      border: none;
      font-family: ${typography.fontFamily};
      font-style: inherit;
      font-weight: ${typography.fontWeight.normal};
      background-size: 150% 150%;
      background-position: 50% 50%;
      margin: 0.5%;

      transition: ${transitions.normal};

      & > .startIcon {
        margin-right: 18px;
      }

      & > .endIcon {
        margin-left: 18px;
      }

      & * {
        box-sizing: border-box;
        position: relative;
        z-index: 1;
        transition: ${transitions.normal};
      }

      &:hover {
        transform: scale(1.05);
        background-position: 100% 100%;
      }

      ${parseObjToCSS(styles)}
      ${parseObjToCSS(variantStyles)}

      ${parseMedia(media)}
    `;
  }}
`;

import styled, { css } from 'styled-components';
import { parseObjToCSS, parseMedia } from '../theme';

export const Wrapper = styled.div`
  ${({ theme }) => {
    const { styles, media } = theme.components.input;

    return css`
      & * {
        box-sizing: border-box;
      }

      position: relative;
      overflow: hidden;

      & > input {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;

        border-radius: ${styles.borderRadius} 0px 0px ${styles.borderRadius};
        width: calc(100% - ${styles.height});
      }

      ${parseObjToCSS(styles)}

      ${parseMedia(media)}
    `;
  }}
`;

export const ButtonInput = styled.button`
  ${({ theme }) => {
    const { transitions } = theme;
    const { styles, button } = theme.components.input;

    return css`
      box-sizing: border-box;

      transition: ${transitions.normal};

      cursor: pointer;
      border: none;
      display: block;
      padding: 0;
      overflow: hidden;

      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;

      display: flex;
      justify-content: center;
      align-items: center;

      width: ${styles.height};
      height: ${styles.height};
      border-radius: 0px ${styles.borderRadius} ${styles.borderRadius} 0px;

      ${parseObjToCSS(button)}

      & > .arrow-icon {
        transition: ${transitions.normal};
        position: absolute;

        width: 47%;
        height: min-content;
      }

      & > .arrow-icon:nth-child(1) {
        left: -50%;
      }

      &:hover {
        & > .arrow-icon {
          transform: translateX(170%);
        }
      }
    `;
  }}
`;

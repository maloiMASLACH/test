import styled, { css } from 'styled-components';
import { parseObjToCSS, parseMedia } from '../../theme';

export const Wrapper = styled.button`
  ${({ theme }) => {
    const { styles, media, lines } = theme.components.burgerButton;
    const { breakpoints, transitions } = theme;

    return css`
      outlined: none;
      border: none;
      width: 70px;
      height: 70px;

      border-radius: 6px;

      flex-direction: column;
      align-items: center;
      justify-content: center;

      display: flex;

      transition: ${transitions.normal};

      ${parseObjToCSS(styles)}

      & > div {
        width: 70%;
        height: 1.65px;
        border-radius: 75px;

        transition: ${transitions.normal};

        ${parseObjToCSS(lines)}

        &:not(:last-child) {
          margin-bottom: 20%;
        }
      }

      &.open {
        & > div {
          margin-bottom: 0;
          &:nth-child(1) {
            transform: rotate(45deg);

            position: relative;
            top: 3%;
          }

          &:nth-child(2) {
            opacity: 0;
          }

          &:nth-child(3) {
            transform: rotate(-45deg);

            position: relative;
            top: -3%;
          }
        }
      }

      @media (max-width: ${breakpoints.values.sm}${breakpoints.unit}) {
        width: 37px;
        height: 37px;

        &.opened {
          & > div {
            &:nth-child(1) {
              top: 5%;
            }

            &:nth-child(3) {
              top: -5%;
            }
          }
        }
      }

      ${parseMedia(media)}
    `;
  }}
`;

import styled, { css } from 'styled-components';
import { parseObjToCSS, parseMedia } from '../theme';

export const StyledInput = styled.input`
  ${({ theme }) => {
    const { transitions, typography } = theme;
    const { text } = theme.palette;
    const { styles, placeholder, media } = theme.components.input;

    return css`
      font-family: ${typography.fontFamily};
      font-style: inherit;
      font-weight: ${typography.fontWeight.normal};
      color: ${text.secondary};
      transition: ${transitions.normal};

      overflow: hidden;

      padding: 0 16px;
      border: none;

      &::placeholder {
        transition: ${transitions.normal};

        font-family: 'Sora', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 100%;
        line-height: 200%;

        ${parseObjToCSS(placeholder)}
      }

      &:focus {
        outline: none;

        &::placeholder {
          opacity: 0;
        }
      }

      ${parseObjToCSS(styles)}

      ${parseMedia(media)}
    `;
  }}
`;

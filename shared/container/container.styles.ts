import styled, { css } from 'styled-components';
import { parseMedia, parseObjToCSS } from '../theme';

export const Wrapper = styled.div`
  ${({ theme }) => {
    const { styles, media } = theme.components.container;

    return css`
      ${parseObjToCSS(styles)}

      ${parseMedia(media)}
    `;
  }}
`;

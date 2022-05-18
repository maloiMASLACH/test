import styled, { css } from 'styled-components';
import { parseObjToCSS, parseMedia } from '..';
import { AnnouncementBarProps } from './announcement-bar.model';

export const Wrapper = styled.div<AnnouncementBarProps>`
  ${({ theme, variant = 'light' }) => {
    const { breakpoints } = theme;
    const { superNormal } = theme.typography.fontSize;
    const variantStyles = theme.components.announcement.variant[variant];
    const { styles, media } = theme.components.announcement;

    return css`
      padding-top: 16px;
      padding-bottom: 14px;
      text-align: center;
      font-size: ${superNormal};
      line-height: 136%;
      letter-spacing: 1px;

      ${parseObjToCSS(styles)}
      ${parseObjToCSS(variantStyles)}

      @media (max-width: ${breakpoints.values.sm}${breakpoints.unit}) {
        display: none;
      }

      ${parseMedia(media)}
    `;
  }}
`;

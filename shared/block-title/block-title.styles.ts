import styled, { css, DefaultTheme } from 'styled-components';
import { CustomTheme } from '../../shared';

interface IMyTheme {
  text?: string;
}

const Title = styled.h2<IMyTheme>`
  ${({ theme, text }) => {
    const textContent = text;
    const { fontWeight, fontSize } = theme.typography;
    const { palette } = theme;
    const { breakpoints } = theme;

    return css`
      width: 100%;
      position: relative;
      text-align: center;
      margin-bottom: 18px;
      font-size: ${fontSize.normal};
      font-style: normal;
      font-weight: ${fontWeight.semiBold};
      line-height: 136%;
      letter-spacing: 1px;
      color: ${palette.text.primary};

      @media (min-width: ${breakpoints.values.md}${breakpoints.unit}) {
        font-size: ${fontSize.large};
        margin-bottom: 58px;
        &::before {
          visibility: visible;
          position: absolute;
          right: 0;
          bottom: 20px;
          left: 0;
          content: '${textContent}';
          font-style: normal;
          font-size: ${fontSize.extraLarge};
          line-height: 136%;
          letter-spacing: 1px;
          opacity: 0.02;
        }
      }
    `;
  }}
`;

const Span = styled.span`
  color: ${({ theme }) => theme.palette.text.third};
`;

export { Title, Span };

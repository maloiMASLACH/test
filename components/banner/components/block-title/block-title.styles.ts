import styled, { css } from 'styled-components';

interface IMyTheme {
  text?: string;
}
const Span = styled.span`
  color: ${({ theme }) => theme.palette.text.banner};
  padding: 0;
`;
const Title = styled.h2<IMyTheme>`
  ${({ theme }) => {
    const { fontWeight, fontSize } = theme.typography;
    const { palette } = theme;

    return css`
      width 70%;
      display: block;
      position: relative;
      text-align: left;
      margin-bottom: 18px;
      font-size: ${fontSize.large};
      font-style: normal;
      font-weight: ${fontWeight.semiBold};
      line-height: 136%;
      letter-spacing: 1px;
      color: ${palette.text.primary};
      background: transparent;
    `;
  }}
`;

export { Title, Span };

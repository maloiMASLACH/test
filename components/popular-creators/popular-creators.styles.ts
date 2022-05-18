import styled, { css } from 'styled-components';

const Title = styled.h2`
  ${({ theme }) => {
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
          content: 'Popular creators';
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

const Wrapper = styled.div`
  ${({ theme }) => {
    const { fontFamily } = theme.typography;
    const { background } = theme.palette;

    return css`
      max-width: 1280px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      flex-direction: column;
      font-family: ${fontFamily};
      background-color: ${background.third};
    `;
  }}
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export { Title, Span, Wrapper, CardsWrapper };

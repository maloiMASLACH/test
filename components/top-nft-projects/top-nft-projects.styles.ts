import styled, { css } from 'styled-components';

export const TopNftProjectsWrapper = styled.div`
  ${({ theme }) => {
    const { breakpoints } = theme;
    const { fontFamily, fontWeight } = theme.typography;
    const { text, background, secondary } = theme.palette;

    return css`
      font-family: ${fontFamily};
      font-weight: ${fontWeight.semiBold};
      color: ${text.primary};
      background: ${background.dark};
      padding: 50px 5em;

      h1 {
        margin: 0;
        font-size: 4em;
        text-align: center;

        @media (max-width: ${breakpoints.values.md}${breakpoints.unit}) {
          font-size: 2.4em;
        }

        @media (max-width: ${breakpoints.values.sm}${breakpoints.unit}) {
          font-size: 1.7em;
        }
      }

      span {
        color: ${secondary.main};
        padding-left: 0.3em;
      }

      @media (max-width: ${breakpoints.values.md}${breakpoints.unit}) {
        padding: 0 1.5em;
      }
    `;
  }}
`;
export const Span = styled.span`
  color: ${({ theme }) => theme.palette.text.third};
`;

export const SubtitleLargeView = styled.p`
  ${({ theme }) => {
    const { breakpoints } = theme;
    const { dark } = theme.palette.text;

    return css`
      margin: 0;
      padding: 1em 5em 1em 5em;
      color: ${dark};
      font-size: 2em;
      line-height: 1em;
      text-align: center;

      @media (max-width: ${breakpoints.values.lg}${breakpoints.unit}) {
        padding: 1em 1em 0 1em;
        font-size: 1.5em;
      }

      @media (max-width: ${breakpoints.values.md}${breakpoints.unit}) {
        padding: 1em 2em 0 2em;
      }

      @media (max-width: ${breakpoints.values.sm}${breakpoints.unit}) {
        display: none;
      }
    `;
  }}
`;

export const SubtitleSmallView = styled(SubtitleLargeView)`
  ${({ theme }) => {
    const { breakpoints } = theme;

    return css`
      display: none;

      @media (max-width: ${breakpoints.values.sm}${breakpoints.unit}) {
        display: inline-block;
        padding: 0.5em 0.3em 0.5em 0.3em;
        font-size: 0.9em;
        font-weight: 400;
      }
    `;
  }}
`;

export const SelectWrapper = styled.div`
  ${({ theme }) => {
    const { breakpoints } = theme;

    return css`
      display: flex;
      justify-content: center;
      gap: 5px;
      margin-top: 3.7em;
      margin-bottom: 6em;

      @media (max-width: ${breakpoints.values.md}${breakpoints.unit}) {
        margin-top: 1.7em;
        margin-bottom: 2em;
      }

      @media (max-width: ${breakpoints.values.sm}${breakpoints.unit}) {
        margin: 1em 0;
        gap: 10px;
      }
    `;
  }}
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => {
    const { breakpoints } = theme;

    return css`
      display: flex;
      justify-content: center;
      padding-top: 50px;

      & .Button {
        width: 278px;
        height: 80px;
        font-size: 30px;
        padding: 17px 58px;

        @media (max-width: ${breakpoints.values.md}${breakpoints.unit}) {
          width: 210px;
          height: 68px;
          font-size: 20px;
          padding: 14px 51px;
        }

        @media (max-width: ${breakpoints.values.sm}${breakpoints.unit}) {
          width: 157px;
          height: 48px;
          font-size: 14px;
          padding: 14px 40px;
        }
      }

      @media (max-width: ${breakpoints.values.md}${breakpoints.unit}) {
        padding-top: 10px;
      }
      @media (max-width: ${breakpoints.values.sm}${breakpoints.unit}) {
        padding-top: 27px;
      }
    `;
  }}
`;

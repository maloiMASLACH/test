import styled, { css } from 'styled-components';
const Wrapper = styled.div`
  ${({ theme }) => {
    const { fontFamily } = theme.typography;
    // const { background } = theme.palette;

    return css`
      width: 100%;
      max-width: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      flex-direction: column;
      font-family: ${fontFamily};
    `;
  }}
`;

const SubtitleLargeView = styled.p`
  ${({ theme }) => {
    const { dark } = theme.palette.text;

    return css`
      width 80%;
      margin: 0;
      padding: 1em 0 1em 0;
      color: ${dark};
      font-size: 25px;
      line-height: 1em;
      text-align: left;
      line-height: 166.5%;
    `;
  }}
`;
const Container = styled.div`
  ${() => {
    return css`
      margin: 0 auto;
      width: 80%;
      display: flex;
      align-items: flex-start;
      align-content: space-evently;
      justify-content: center;
      flex-direction: row;
      padding: 100px 0;
    `;
  }}
`;
const RightSide = styled.div`
  ${({ theme }) => {
    const { breakpoints } = theme;
    return css`
      @media (max-width: ${breakpoints.values.sm}${breakpoints.unit}) {
        display: none;
      }
    `;
  }}
`;
const LeftSide = styled.div`
  ${() => {
    return css`
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: flex-start;
      width: fit-content;
    `;
  }}
`;

export { Wrapper, Container, SubtitleLargeView, LeftSide, RightSide };

import styled, { css } from 'styled-components';
interface IWrapper {
  margin: string;
}

const Wrapper = styled.div<IWrapper>`
  ${({ theme }) => {
    const { fontFamily, fontSize } = theme.typography;
    const { breakpoints } = theme;
    return css`
      background: #191c4f;
      font-family: ${fontFamily};
      backdrop-filter: blur(9.77415px);
      border-radius: 35px;
      border: 1px solid rgba(219, 143, 255, 1);
      @media (min-width: ${breakpoints.values.md}${breakpoints.unit}) and (max-width: ${breakpoints.values.lg}${breakpoints.unit}) {
        &:first-child {
          display: none;
        }
      }
      @media (max-width: ${breakpoints.values.md}${breakpoints.unit}) {
        &:first-child {
          display: none;
        }
        &:nth-child(2){
          display: none;
        }
    `;
  }}
`;
const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  max-width: 311px;
  max-height: 143px;
  width: 311px;
  height: 143px;
`;
const Line = styled.div`
  width: 25%;
  border-bottom: 1px solid #c98fff;
`;
const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Icon = styled.img`
  ${({ theme }) => {
    const { breakpoints } = theme;
    return css`
      border-radius: 50%;
      margin-right: 1em;
      @media (${breakpoints.values.sm}${breakpoints.unit}) {
        margin-bottom: 34px;
        width: 100%;
      }
    `;
  }}
`;
const Span = styled.span`
  text-align: center;
  color: ${({ theme }) => theme.palette.text.dark};
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
`;
export { Wrapper, Line, Span, CardContainer, IconContainer, Icon };

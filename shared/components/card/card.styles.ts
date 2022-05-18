import styled, { css } from 'styled-components';
import { Button } from '../button';
import { parseObjToCSS } from '../../theme';

interface IWrapper {
  margin: string;
}

const Wrapper = styled.div<IWrapper>`
  ${({ margin, theme }) => {
    const { fontFamily } = theme.typography;
    const { breakpoints } = theme;

    return css`
      max-width: 313px;
      margin: ${margin};
      display: flex;
      align-items: center;
      flex-direction: column;
      font-family: ${fontFamily};

      @media (${breakpoints.values.sm}${breakpoints.unit}) {
        max-width: 416px;
      }
    `;
  }}
`;

const Content = styled.div`
  ${({ theme }) => {
    const styles = theme.components.card.styles;

    return css`
      padding: 15px;
      padding-bottom: 41px;
      display: flex;
      flex-direction: column;
      align-items: center;
      ${parseObjToCSS(styles)}
    `;
  }}
`;

const Img = styled.img`
  ${({ theme }) => {
    const { breakpoints } = theme;

    return css`
      width: 100%;
      margin-bottom: 17px;
      border-radius: 25px;

      @media (${breakpoints.values.sm}${breakpoints.unit}) {
        margin-bottom: 34px;
        width: 100%;
      }
    `;
  }}
`;
const Icon = styled.img`
  ${({ theme }) => {
    const { breakpoints } = theme;
    return css`
      margin-bottom: 17px;
      border-radius: 100%;

      @media (${breakpoints.values.sm}${breakpoints.unit}) {
        margin-bottom: 34px;
        width: 100%;
      }
    `;
  }}
`;
const Title = styled.h2`
  ${({ theme }) => {
    const { fontWeight, fontSize } = theme.typography;
    const { breakpoints } = theme;

    return css`
      font-size: ${fontSize.normal};
      line-height: 24px;
      margin-bottom: 30px;
      font-style: normal;
      font-weight: ${fontWeight.semiBold};

      @media (min-width: ${breakpoints.values.sm}${breakpoints.unit}) {
        font-size: ${fontSize.medium};
        line-height: 45px;
      }
    `;
  }}
`;

const Description = styled.p`
  ${({ theme }) => {
    const { fontWeight, fontSize } = theme.typography;
    const { text } = theme.palette;
    const { breakpoints } = theme;

    return css`
      font-size: ${fontSize.extraSmall};
      line-height: 25px;
      margin-bottom: 64px;
      text-align: center;
      font-style: normal;
      font-weight: ${fontWeight.standard};
      color: ${text.dark};

      @media (min-width: ${breakpoints.values.sm}${breakpoints.unit}) {
        font-size: ${fontSize.normal};
        line-height: 27px;
      }
    `;
  }}
`;

const ContactLinksContainer = styled.div`
  display: flex;
  width: 160px;
  justify-content: center;

  & a {
    margin: 0 auto;
  }
`;
const Line = styled.div`
  margin-bottom: 38px;
  width: 25%;
  border-bottom: 1px solid #c98fff;
`;

const CardDecoration = styled.div`
  ${({ theme }) => {
    const styles = theme.components.card.decoration;

    return css`
      display: flex;
      width: 80%;
      padding-bottom: 20px;
      ${parseObjToCSS(styles)}
    `;
  }}
`;

const CardButton = styled(Button)`
  ${({ theme }) => {
    const { fontSize } = theme.typography;
    const { breakpoints } = theme;

    return css`
      padding: 13px auto;
      font-size: ${fontSize.small};

      @media (min-width: ${breakpoints.values.sm}${breakpoints.unit}) {
        padding: 23px 40px;
        font-size: ${fontSize.normal};
      }
    `;
  }}
`;

export {
  Wrapper,
  Content,
  Img,
  Title,
  Line,
  Description,
  CardButton,
  ContactLinksContainer,
  CardDecoration,
  Icon
};

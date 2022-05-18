import styled, { css } from 'styled-components';
import { Button } from '../button';
import { parseObjToCSS } from '../theme';

interface IWrapper {
  margin: string;
}

const Wrapper = styled.div<IWrapper>`
  ${({ margin, theme }) => {
    const { fontFamily } = theme.typography;
    return css`
      width: fit-content;
      margin: ${margin};
      display: flex;
      align-items: center;
      flex-direction: column;
      font-family: ${fontFamily};
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
      background: #080a2c;
      box-shadow: 14px 41px 100px rgba(140, 49, 211, 0.12);
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
      margin-bottom: 45px;
      margin-right: 15px;
      border-radius: 50%;
      height: 67px;
      @media (${breakpoints.values.sm}${breakpoints.unit}) {
        margin-bottom: 34px;
        width: 100%;
      }
    `;
  }}
`;
const NftNameContainer = styled.p`
  ${({ theme }) => {
    const { fontWeight, fontSize } = theme.typography;
    const { text } = theme.palette;

    return css`
      vertical-align: top;
      display: block;
      font-size: ${fontSize.medium};
      line-height: 38px;
      margin-bottom: 64px;
      text-align: center;
      font-style: normal;
      font-weight: ${fontWeight.semiBold};
      color: ${text.banner};
    `;
  }}
`;
const UserNameContainer = styled.p`
  ${({ theme }) => {
    const { fontWeight, fontSize } = theme.typography;
    const { text } = theme.palette;

    return css`
      text-align: center;
      padding: 1rem;
      vertical-align: top;
      display: block;
      font-size: ${fontSize.normal};
      line-height: 25px;
      margin-bottom: 64px;
      text-align: center;
      font-style: normal;
      font-weight: ${fontWeight.semiBold};
      color: ${text.dark};
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
const CardButton = styled(Button)`
  ${({ theme }) => {
    const { fontSize } = theme.typography;
    const { breakpoints } = theme;
    const { text } = theme.palette;
    return css`
      font-size: ${fontSize.small};
      background: rgba(25, 28, 79, 0.26);
      box-shadow: 0px 30.0153px 45px rgba(0, 222, 222, 0.12);
      border-radius: 96.4776px;
      color: ${text.banner};
      border: 1px solid ${text.banner};
      @media (min-width: ${breakpoints.values.sm}${breakpoints.unit}) {
        padding: 23px 40px;
        font-size: ${fontSize.normal};
      }
    `;
  }}
`;
const InfoContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row-reverse;
`;
const UserDataContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  flex-direction: row-reverse;
`;
export {
  Wrapper,
  Content,
  Img,
  Title,
  Description,
  CardButton,
  Icon,
  NftNameContainer,
  UserNameContainer,
  InfoContainer,
  UserDataContainer
};

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => {
    const { fontFamily, fontWeight } = theme.typography;
    const { primary, gray } = theme.palette.text;
    const { breakpoints } = theme;

    return css`
      font-family: ${fontFamily};
      font-style: normal;
      font-weight: ${fontWeight.normal};

      & .footer-top {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 50px 0;
      }

      & .footer-col {
        display: flex;
        flex-direction: column;

        & > a {
          max-width: max-content;
          font-size: 15px;
          line-height: 22px;
        }
      }

      & .footer-col-1 {
        width: 340px;
      }

      & .footer-col-2 {
        width: 140px;

        & h3 {
          margin-bottom: 16px;
        }

        & a:not(:last-child) {
          margin-bottom: 10px;
        }
      }

      & .footer-col-3 {
        width: 290px;

        & h3 {
          margin-bottom: 29px;
        }
      }

      & .contacts-link {
        display: flex;
        align-items: center;

        & .rectang-icon {
          margin-right: 16px;
          min-width: 35px;
        }

        & a {
          font-size: 14px;
          line-height: 22px;
          display: block;
          margin: 2px 0;
        }

        &.mb-l-1 {
          margin-bottom: 22px;
        }

        &.mb-l-2 {
          margin-bottom: 31px;
        }
      }

      & span {
        font-size: 19px;
        line-height: 167%;

        color: ${gray};

        margin-bottom: 43px;
      }

      & a {
        color: ${gray};
      }

      & .footer-social {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      & h3 {
        margin: 0;

        font-size: 20px;
        line-height: 30px;
        color: ${primary};
      }

      & .footer-divider {
        width: 100%;
        height: 1px;
        background: ${gray};
      }

      & .footer-down {
        padding: 36px 0;
        margin: 0;
        display: flex;
        justify-content: center;

        font-size: 15px;
        line-height: 180%;
        text-align: center;

        color: ${gray};
      }

      @media (max-width: ${breakpoints.values.lg}${breakpoints.unit}) {
        & .footer-col-1,
        & .footer-col-2 {
          margin-bottom: 30px;
        }
      }

      @media (max-width: ${breakpoints.values.sm}${breakpoints.unit}) {
        & .footer-top {
          flex-direction: column;
          padding: 35px 0 0 0;
        }

        & span {
          font-size: 14px;
          text-align: center;
        }

        & .input {
          height: 46px;
          width: 100%;

          & * {
            height: 46px;
            text-overflow: ellipsis;
          }
        }

        & .footer-col {
          width: 100%;
        }

        & .footer-col-1 {
          margin-bottom: 34px;
        }

        & .footer-col-2 {
          order: 1;

          margin-bottom: 28px;

          & h3 {
            margin-bottom: 16px;
          }
        }

        & .footer-col-3 {
          margin-bottom: 46px;

          & h3 {
            margin-bottom: 40px;
          }
        }

        & .footer-divider {
          display: none;
        }

        & .footer-down {
          padding: 20px;
        }
      }
    `;
  }}
`;

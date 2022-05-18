import styled, { css } from 'styled-components';
export const HeaderBlock = styled.div`
  ${({ theme }) => {
    const { fontFamily, fontWeight } = theme.typography;

    return css`
      font-family: ${fontFamily};
      font-style: normal;
      font-weight: ${fontWeight.normal};
    `;
  }}
`;

export const Wrapper = styled.div`
  ${({ theme }) => {
    const { breakpoints, typography, transitions, backdropFilter } = theme;
    const { text, secondary } = theme.palette;
    const { extraSmall } = theme.typography.fontSize;

    return css`
      padding: 35px 73px;
      background-repeat: no-repeat;
      display: flex;
      justify-content: space-between;
      align-items: center;

      font-size: 24px;
      color: ${text.primary};

      & .logo {
        max-height: 70px;
        height: 100%;
        width: auto;
      }

      & .nav-links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 24px;
        letter-spacing: 1px;
        color: ${text.primary};

        transition: ${transitions.normal};

        & > a {
          margin: 20px;
        }
      }

      & .controls,
      .connected-controls {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      & .controls {
        min-width: 340px;
      }

      & .connected-controls {
        padding-left: 36px;
        position: relative;

        &:before {
          content: '';
          position: absolute;
          top: 1px;
          left: 1px;
          right: 1px;
          bottom: 1px;

          border: 1px solid ${secondary.fourth};
          border-radius: 64px;
        }

        & > img {
          padding-left: 12px;
          padding-right: 20px;
        }

        & .button {
          position: relative;
        }
      }

      & .search.mobile {
        display: none;
      }

      & .button {
        font-weight: ${typography.fontWeight.semiBold};
        padding: 18px 40px;
      }

      & .burger {
        position: relative;
        z-index: 101;
        display: none;
      }

      @media (max-width: ${breakpoints.values.xl}${breakpoints.unit}) {
        & .logo {
          width: 200px;
        }

        & .nav-links {
          font-size: 20px;
        }

        & .button {
          font-size: 20px;
          padding: 18px 35px;

          & > img {
            width: 25px;
            height: 25px;
          }
        }
      }

      @media (max-width: ${breakpoints.values.lg}${breakpoints.unit}) {
        padding: 35px 25px;

        & .nav-links {
          & > a {
            margin: 10px;
          }
        }

        & .controls {
          min-width: 290px;
        }

        & .connected-controls {
          padding-left: 0;

          &:before,
          & > span,
          & > img {
            display: none;
          }
        }
      }

      @media (max-width: ${breakpoints.values.md}${breakpoints.unit}) {
        & .nav-links {
          flex-direction: column;
          justify-content: center;

          position: fixed;
          z-index: 100;
          top: 0;
          right: 0;
          bottom: 0;
          width: 0;
          overflow: hidden;

          backdrop-filter: ${backdropFilter.secondary};

          & > a:not(:last-child) {
            margin-bottom: 30px;
          }

          &.opened {
            width: 100%;
          }
        }

        & .burger {
          display: flex;
        }

        & .controls {
          min-width: auto;
        }

        & .search.mobile {
          display: flex;
        }

        & .search.desktop {
          display: none;
        }
      }

      @media (max-width: ${breakpoints.values.sm}${breakpoints.unit}) {
        & .logo {
          width: auto;
          max-height: 24px;
        }

        & .button {
          padding: 8px 13px;
          font-size: ${extraSmall};
          line-height: 19px;

          & > img:first-child {
            width: 11px;
            height: 11px;
            margin-right: 5px;
          }
        }

        & .connected-controls {
          & .button {
            & > img {
              margin: 0;
            }
            & > span {
              display: none;
            }
          }
        }
      }

      @media (max-width: ${breakpoints.values.xs}${breakpoints.unit}) {
        flex-wrap: wrap;

        & .logo {
          flex-basis: 70%;
          height: 10.5%;
          margin: auto;
          margin-bottom: 20px;
        }

        & .connected-controls {
          & .button {
            & > img {
              margin-right: 5px;
            }
            & > span {
              display: inline;
            }
          }
        }
      }
    `;
  }}
`;

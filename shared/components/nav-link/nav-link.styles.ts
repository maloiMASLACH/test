import styled, { css } from 'styled-components';

export const Wrapper = styled.a`
  ${({ theme }) => {
    const { primary } = theme.palette.text;

    return css`
      font-size: inherit;
      line-height: inherit;
      letter-spacing: inherit;
      color: ${primary};
      text-decoration: none;
      position: relative;

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        background: currentColor;
        top: 100%;
        left: 0;
        pointer-events: none;
        transform-origin: 100% 50%;
        transform: scale3d(0, 1, 1);
        transition: transform 0.3s;
      }

      &:hover:before {
        transform-origin: 0% 50%;
        transform: scale3d(1, 1, 1);
      }
    `;
  }}
`;

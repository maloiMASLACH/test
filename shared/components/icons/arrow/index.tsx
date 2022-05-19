import styled, { css } from 'styled-components';
import { ReactComponent as Arrow } from './Arrow.svg';

interface IconProps {
  color: string;
}

export const ArrowIcon = styled(Arrow)<IconProps>`
  ${({ theme, color }) => {
    return css`
      & path {
        stroke: ${color};
      }
    `;
  }}
`;

import styled, { css } from 'styled-components';
import { ReactComponent as Icon } from './search.svg';

interface IconProps {
  color: string;
}

export const SearchIcon = styled(Icon)<IconProps>`
  ${({ theme, color }) => {
    return css`
      & path {
        stroke: ${color};
      }
    `;
  }}
`;

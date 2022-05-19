import { SearchIcon as CustomSearchIcon } from '../icons';
import { Wrapper } from './search-icon.styles';
import { SearchIconProps } from './search-icon.model';

export const SearchIcon: React.FC<SearchIconProps> = ({ color = '#FFFFFF', ...attributes }) => (
  <Wrapper {...attributes}>
    <CustomSearchIcon color={color} />
  </Wrapper>
);

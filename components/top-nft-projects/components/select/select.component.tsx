import React from 'react';
import { SelectProps } from './select.model';
import { Icon, SelectContainer } from './select.styles';
import arrow from '../../assets/arrow.svg';

export const Select: React.FC<SelectProps> = ({ title }) => {
  return (
    <SelectContainer>
      {title}
      <Icon src={arrow} />
    </SelectContainer>
  );
};

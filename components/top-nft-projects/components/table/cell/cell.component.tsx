import React from 'react';
import { CellProps } from './cell.model';
import { CellWrapper } from './cell.styles';

export const Cell: React.FC<CellProps> = React.memo(({ value }) => {
  return <CellWrapper>{value}</CellWrapper>;
});

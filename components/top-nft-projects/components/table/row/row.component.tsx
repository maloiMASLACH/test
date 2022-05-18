import React from 'react';
import { Cell } from '../cell';
import { RowProps } from './row.model';
import { RowContainer } from './row.styles';

export const Row: React.FC<RowProps> = React.memo(({ row, columns }) => {
  return (
    <RowContainer>
      {columns.map((key) => (
        <Cell key={key} value={row[key]} />
      ))}
    </RowContainer>
  );
});

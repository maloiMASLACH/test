import React from 'react';
import { Cell } from '../cell';
import { TableHeaderProps } from './header.model';
import { TableHeaderWrapper } from './header.styles';

export const TableHeader: React.FC<TableHeaderProps> = React.memo(
  ({ isMobile, columns, adaptiveColumns }) => {
    return (
      <TableHeaderWrapper>
        {isMobile
          ? adaptiveColumns[0]
          : Object.keys(columns).map((key, index) => <Cell key={index} value={columns[key]} />)}
      </TableHeaderWrapper>
    );
  }
);

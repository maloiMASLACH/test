import React, { useMemo } from 'react';
import { TableHeader } from './header';
import { Row } from './row';
import { TableProps } from './table.model';
import { RowsWrapper, TableContainer } from './table.styles';
import useMediaQuery from '../../hooks/use-media-query.hook';
import { customTheme } from '../../../../../';

export const Table: React.FC<TableProps> = React.memo(({ columns, adaptiveColumns, rows }) => {
  const isMobile = useMediaQuery(`(max-width: ${customTheme.breakpoints.values.sm}px)`);

  const columnsToRender = useMemo(
    () => (isMobile ? adaptiveColumns : Object.keys(columns)),
    [adaptiveColumns, isMobile, columns]
  );

  const renderRows = rows.map((row, index) => (
    <Row row={row} columns={columnsToRender} key={index} />
  ));

  return (
    <TableContainer>
      <TableHeader isMobile={isMobile} columns={columns} adaptiveColumns={adaptiveColumns} />

      <RowsWrapper>{renderRows}</RowsWrapper>
    </TableContainer>
  );
});

export interface RowProps {
  row: { [key: string]: string | number | JSX.Element | JSX.Element[] | null };
  columns: string[];
}

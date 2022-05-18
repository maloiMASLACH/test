export interface TableProps {
  columns: { [key: string]: string };
  adaptiveColumns: string[];
  rows: { [key: string]: string | number | JSX.Element | JSX.Element[] | null }[];
}

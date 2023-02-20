import { FC } from "react";
import { IDataTable } from "../../../@types/table";
import {
  Container,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
  TableStyle,
} from "./styles";

export interface ITableProps {
  data?: any;
}
export const Table: FC<ITableProps> = ({ data }) => {
  const headers = Object.keys(data![0]);

  return (
    <Container align="center" direction="row" justify="center">
      <TableStyle>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableHeader key={header}>{header}</TableHeader>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data!.map((row: any, index: any) => (
            <TableRow key={index}>
              {headers.map((header) => (
                <TableData key={`${index}-${header}`}>
                  {typeof row[header] === "object"
                    ? JSON.stringify(row[header])
                    : row[header]}
                </TableData>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </TableStyle>
    </Container>
  );
};

import styled from "styled-components";
import { FlexBox } from "../../utils/Flexbox";

export const Container = styled(FlexBox)`
  width: 80%;
  heigth: 80%;
  margin: 1rem;
`;

export const TableStyle = styled.table`
  width: 100%;
`;
export const TableHead = styled.thead``;
export const TableHeader = styled.th`
  background-color: ${({ theme }) => theme?.colors?.dark?.[1]};
  color: white;
  text-align: center;
  padding: 8px;
`;
export const TableBody = styled.tbody``;
export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme?.colors?.light?.[4]};
  }
`;
export const TableData = styled.td`
  text-align: center;
  padding: 8px;
  color: ${({ theme }) => theme.font.colors.dark};
`;

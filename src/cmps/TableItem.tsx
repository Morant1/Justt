import React from "react";
import { Item } from '../models/item.model'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { RowItem } from "./RowItem";
import { headCells } from "../helpers/TableHelper";



type Props = {
  items: Item[]
}




export const TableItem: React.FC<Props> = ({ items }) => {
  const [orderBy, setOrderBy] = React.useState<string>("id");
  const [order, setOrder] = React.useState<'asc' | 'desc'>("asc");



  const createSortHandler = (property: string) => (event: any) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };



  function descendingComparator(a: any, b: any, orderBy: any) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }




  function getComparator(order: string, orderBy: string) {
    return order === "desc"
      ? (a: Item, b: Item) => descendingComparator(a, b, orderBy)
      : (a: Item, b: Item) => -descendingComparator(a, b, orderBy);
  }



  function stableSort(array: Item[], comparator: any): any[] {
    const mappedArray = array.map((el, index) => [el, index]);
    mappedArray.sort((a: any, b: any) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return mappedArray.map((el) => el[0]);
  }



  return (
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => {
                return headCell.id === "more" ? (
                  <TableCell key={headCell.id} padding="default">
                    {headCell.label}
                  </TableCell>
                ) : (
                  <TableCell
                    key={headCell.id}
                    align={"center"}
                    padding={headCell.disablePadding ? "none" : "default"}
                    sortDirection={orderBy === headCell.id ? order : false}
                  >
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order || undefined : "asc"}
                      onClick={createSortHandler(headCell.id)}
                    >
                      {headCell.label}
                    </TableSortLabel>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(items, getComparator(order, orderBy)).map((item: Item, index: number) => (
              <RowItem key={item.id} row={item} isEven={index % 2 !== 0} />
            ))}
          </TableBody>
        </Table>
  );




}


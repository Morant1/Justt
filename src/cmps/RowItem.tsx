import React from "react";
import { Item } from '../models/item.model'
import IconButton from "@material-ui/core/IconButton";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Card } from "./Card";

type Props = {
  row: Item;
  isEven: boolean;
}

export const RowItem: React.FC<Props> = ({ row, isEven }) => {
  const [open, setOpen] = React.useState(false);


  return (
    <React.Fragment>
      <TableRow style={{ backgroundColor: isEven ? '#F5F0FF' : '' }}>
        <TableCell>{row.id}</TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.species}</TableCell>
        <TableCell>{row.status}</TableCell>
        <TableCell>{row.originName}</TableCell>
        <TableCell>{row.gender}</TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            style={{ background: open ? '#4310AE' : '', color: open ? '#fff' : '' }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <Card row={row} open={open} />
      </TableRow>
    </React.Fragment>
  );
}






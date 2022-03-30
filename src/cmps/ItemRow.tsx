import React from "react";
import {Item} from '../models/item.model'
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
// import { visuallyHidden } from "@mui/utils";
import TableBody from "@material-ui/core/TableBody";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Card } from "./Card";

type Props = {
    row: Item;
    isEven:boolean;
}

export const ItemRow: React.FC<Props> = ({row,isEven}) => {
  const [open, setOpen] = React.useState(false);


  return (
    <React.Fragment>
      <TableRow style={{backgroundColor: isEven ? '#F5F0FF' :'' }}>
      {/* sx={{ "& > *": { borderBottom: "unset" } }} */}
        <TableCell>{row.id}</TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.species}</TableCell>
        <TableCell>{row.status}</TableCell>
        <TableCell>{row.origin.name}</TableCell>
        <TableCell>{row.gender}</TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            style={{background: open ? '#4310AE' : '',color:open ? '#fff' : ''}}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box m={{xs: 1}}>
                    <Card row={row}/>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
 
 




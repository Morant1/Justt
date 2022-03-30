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
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { ItemRow } from "./ItemRow";
import { headCells } from "../helpers/TableHelper";


export const theme = createMuiTheme({
  palette: {
      primary: {
          main: '#ffffff'
      },
  },
  overrides: {
    MuiIconButton:{
      root:{
        color:'#05111A'
      }
    },
    MuiTableRow:{
      root:{
        boxShadow: 'inset 0px 1px 0px #E6E7E9, inset 0px -1px 0px #E6E7E9'
      }
    },
    MuiTableCell: {
      root: {
        "&$body": {
        color:'#05111A'
        },
        borderBottom: 'none',
        "&$head": {
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '14px',
          lineHeight: '115%',
          letterSpacing: '0.01em',
          color: '#ffffff'
        }
      }
    },
    MuiTableHead: {
      root: {
        backgroundColor: '#200062'
      }
    },
    MuiSvgIcon: {
      root: {
        '&:hover': {
          color:'#6743b1'
        }
      }
    },
    MuiTableSortLabel:{
      root:{
        "&:hover": {
          color:'#6743b1'
        },
        "&$active": {
          color:'#6743b1',
          '&& $icon': {
            color:'#6743b1'
          },
        },

        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '14px',
        lineHeight: '115%',
        letterSpacing: '0.01em',
        color: '#ffffff'
      },
    }
  }
})



type Props = {
    items: Item[]
}




export const ItemTable: React.FC<Props> = ({items}) => {
    const [orderBy, setOrderBy] = React.useState<string>("id");
    const [order, setOrder] = React.useState<'asc' | 'desc'>("asc");
  
   
  
    const createSortHandler = (property:string) => (event:any) => {
      const isAsc = orderBy === property && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(property);
    };
  
   
  
    function descendingComparator(a:any, b:any, orderBy:any) {
      if (b[orderBy] < a[orderBy]) {
        return -1;
      }
      if (b[orderBy] > a[orderBy]) {
        return 1;
      }
      return 0;
    }
  

   
  
    function getComparator(order:string, orderBy:string) {
      return order === "desc"
        ? (a:Item, b:Item) => descendingComparator(a, b, orderBy)
        : (a:Item, b:Item) => -descendingComparator(a, b, orderBy);
    }
  
   
  
    function stableSort(array:Item[], comparator:any) : any[] {
      const mappedArray = array.map((el, index) => [el, index]);
      mappedArray.sort((a:any, b:any) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
          return order;
        }
        return a[1] - b[1];
      });
      return mappedArray.map((el) => el[0]);  
    }
  
   

    return (
      <MuiThemeProvider theme={theme}>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => {
                console.log(headCell);
                return headCell.id === "more" ? (
                  <TableCell key={headCell.id} padding="default">
                    {headCell.label}
                  </TableCell>
                ) : (
                  <TableCell
                    key={headCell.id}
                    align={"left"}
                    padding={headCell.disablePadding ? "none" : "default"}
                    sortDirection={orderBy === headCell.id ? order : false}
                  >
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order || undefined : "asc"}
                      onClick={createSortHandler(headCell.id)}
                    >
                      {headCell.label}
                      {orderBy === headCell.id ? (
                        <Box component="span" style={{display:'none'}}>
                          {order === "desc"
                            ? "sorted descending"
                            : "sorted ascending"}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(items, getComparator(order, orderBy)).map((item:Item,index:number) => (
              <ItemRow key={item.id} row={item} isEven={index % 2 === 0}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </MuiThemeProvider>
    );
  
  


            }


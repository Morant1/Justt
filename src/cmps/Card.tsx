import { Box, Collapse, TableCell } from "@material-ui/core";
import React from "react";
import { headCells } from "../helpers/TableHelper";
import { Item } from '../models/item.model'


type Props = {
    row: Item,
    open:boolean
}

export const Card: React.FC<Props> = ({ row,open }) => {


    return (
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Box m={{ xs: 1 }}>

                    <div className="card">
                        <div className="box">
                            <img alt="card" src={row.image} />
                            <div className="details-container">
                                <p>Character description</p>
                                <div className="details">
                                    {headCells.map((header) => {
                                        const str = header.id;
                                        return str !== 'more' ? (
                                            <div key={header.id} className="detail">
                                                <h1>{header.label}</h1>
                                                <h2>{str !== 'origin' ? row[str] : row[str].name}</h2>
                                            </div>
                                        ) : ''
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>

                </Box>
            </Collapse>
        </TableCell>
    );
};




import React from "react";
import { Link } from 'react-router-dom'
import { headCells } from "../helpers/TableHelper";
import { Item } from '../models/item.model'


type Props = {
    row: Item,
}

export const Card: React.FC<Props> = ({ row }) => {


    return (

        <div className="card">

            <div className="box">

                <img src={row.image} />

                <div className="details">
                    {headCells.map((header) => {
                        const str = header.id;
                        return str !== 'more' ? (
                            <div key={header.id} className="detail">
                                <h1>{header.label}</h1>
                                <h2>{str !== 'origin' ? row[str]: row[str].name}</h2>
                            </div>
                        ): ''
                    })}



                </div>
            </div>

        </div>

    );
};
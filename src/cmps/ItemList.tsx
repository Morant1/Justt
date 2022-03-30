import React from "react";
import {Item} from '../models/item.model'


type Props = {
    items: Item[]
}

export const ItemList: React.FC<Props> = ({items}) => {

  
    return (
        <div className="list">
        {/* {items.map(student => <StudentPreview student={student} key={student._id} select={select} />)} */}
    </div>
    );
  };
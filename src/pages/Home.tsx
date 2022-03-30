import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { loadItems } from '../services/itemService'
import {  Item } from '../models/item.model'
import { Table } from '@material-ui/core'
import { ItemTable } from '../cmps/ItemTable'




type MyState = {
    items:Item[];
};

export default class Home extends React.Component<any, MyState> {

    state: MyState = {
        items:[]
    };


    async componentDidMount() {
        const items = await loadItems();
        console.log("items",items)
        this.setState({items});
    }

  
    render() {
        const { items } = this.state;
        if (!items) return <div>Loading....</div>;


        return (
            <div className="item-app">

                <ItemTable items={items}/>
              
            </div>
        )
    }
}

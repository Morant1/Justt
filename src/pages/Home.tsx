import React from 'react'
import { loadItems, browseInput, searchCharacterInput } from '../services/itemService'
import { Item } from '../models/item.model'
import { MuiThemeProvider, Paper, TableContainer } from '@material-ui/core'
import { TableItem } from '../cmps/TableItem'
import { Search } from '../cmps/Search'
import { theme } from '../helpers/Theme'
import { Card } from '../cmps/Card'
import { NoFoundPage } from '../cmps/NoFoundPage'




type MyState = {
    items: Item[] | null;
    item: Item | null;
    isBrowse: boolean;
    searchValue: string;
    displayMessage: string;
};

export default class Home extends React.Component<any, MyState> {

    state: MyState = {
        items: null,
        item: null,
        isBrowse: true,
        searchValue: "",
        displayMessage: ""
    };


    async componentDidMount() {
        this.load();
    }

    load = async () => {
        const items = await loadItems();
        this.setState({ items });
    }

    handleChange = async (value: string) => {
        const { isBrowse } = this.state;
        if(!value) {
            this.load();
            return;
        }
        if (isBrowse) {
            const items = await browseInput(value);
            this.setState({ items, displayMessage: items && items.length ? "" : "No Items Found" });
        }
        else {
            const item = await searchCharacterInput(value);
            this.setState({ item, displayMessage: item ? "" : "No Character Found" });
        }

    }

    toggleBtn = (value: boolean) => {
        this.setState({ isBrowse: value })
        this.setState({ searchValue: "" })
    }

    render() {
        const { items, isBrowse, searchValue, item, displayMessage } = this.state;
        const { toggleBtn, handleChange } = this;
        if (!items) return <div>Loading...</div>


        return (
            <div className="item-app">
                <button onClick={() => toggleBtn(true)}>Browse</button>
                <button onClick={() => toggleBtn(false)}>Pick a character</button>
                <Search isBrowse={isBrowse} searchValue={searchValue} handleSearchChange={handleChange} />
                <MuiThemeProvider theme={theme}>
                    <TableContainer component={Paper}>
                        {isBrowse ?
                            items && items.length ? <TableItem items={items} /> : <NoFoundPage displayMessage={displayMessage} />
                            :
                            item && Object.keys(item).length ? <Card row={item} open={true} /> : <NoFoundPage displayMessage={displayMessage} />
                        }
                    </TableContainer>
                </MuiThemeProvider>
            </div>
        )
    }
}

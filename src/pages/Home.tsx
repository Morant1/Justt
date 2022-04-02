import React from 'react'
import { loadItems, browseInput, searchCharacterInput } from '../services/itemService'
import { Item } from '../models/item.model'
import { MuiThemeProvider, Paper, Table, TableBody, TableContainer } from '@material-ui/core'
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
        if (!value) {
            this.load();
            return;
        }
        if (isBrowse) {
            const items = await browseInput(value);
            this.setState({ items, displayMessage: items && items.length ? "" : "No Items Found" });
        }
        else {
            const item = Number.isInteger(Number(value)) ? await searchCharacterInput(value) : null;
            this.setState({ item, displayMessage: item ? "" : "No Character Found" });
        }

    }

    toggleBtn = (value: boolean) => {
        const { isBrowse } = this.state;
        this.setState({ isBrowse: value, searchValue: "", displayMessage: "" }, () => {
            if (isBrowse) this.load();
            else this.setState({ item: null })
        })

    }

    render() {
        const { items, isBrowse, searchValue, item, displayMessage } = this.state;
        const { toggleBtn, handleChange } = this;
        if (!items) return (
            <div className="loader">
                <img className="loader" alt="gif" src="https://media.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif" />
            </div>)


        return (
            <div className="item-app">

                <div className="img-box" style={{
                    backgroundImage:
                        `url(${require('../assets/img/wallpaper.png').default})`
                }}></div>

                <div className="img-container">
                    <img alt="justt" src={require("../assets/img/justt.png").default} />
                </div>

                <section>
                    <div className="btn-container">
                        <button className={isBrowse ? "active" : ""} onClick={() => toggleBtn(true)}>Browse</button>
                        <button className={!isBrowse ? "active" : ""} onClick={() => toggleBtn(false)}>Pick a character</button>
                    </div>


                    <div className="table-container">
                        <Search isBrowse={isBrowse} searchValue={searchValue} handleSearchChange={handleChange} />
                        <MuiThemeProvider theme={theme}>
                            <TableContainer component={Paper}>
                                {isBrowse ?
                                    items && items.length ? <TableItem items={items} /> : <NoFoundPage displayMessage={displayMessage} />
                                    :
                                    item && Object.keys(item).length ?
                                        <Table><TableBody><Card row={item} open={true} /></TableBody></Table>
                                        : <NoFoundPage displayMessage={displayMessage} />
                                }
                            </TableContainer>
                        </MuiThemeProvider>
                    </div>
                </section>

            </div>
        )
    }
}

import { Button, InputAdornment, MuiThemeProvider, TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import { theme } from "../helpers/Theme";


type Props = {
    isBrowse: boolean;
    handleSearchChange: (value: string) => void;
    searchValue: string;
}

export const Search: React.FC<Props> = ({ isBrowse, handleSearchChange, searchValue }) => {

    const [value,setValue] = useState<string>(searchValue);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currValue = e.currentTarget.value;
        setValue(currValue);

        if(!currValue) {
            handleSearchChange(currValue)
        }
    }

    useEffect(() =>{
       setValue("")
    },[isBrowse])


    const placeholder = isBrowse ? "Browse for characters..." : "Search for character I.d";
    return (
        <MuiThemeProvider theme={theme}>
            <div className="search">
                <div className="bar">
                    <TextField color="primary" InputProps={{
                        endAdornment: <InputAdornment position="end"><i className="fa fa-search"></i></InputAdornment>
                    }} placeholder={placeholder} name="bio" onChange={handleChange} value={value} />
                </div>
                <Button className="search-btn" onClick={() => handleSearchChange(value)}>
                    Go
                </Button>
            </div>
        </MuiThemeProvider>
    );
};
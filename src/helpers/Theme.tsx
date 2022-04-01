import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffffff'
        },
    },
    overrides: {
        MuiPaper: {
            root: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }
        },
        MuiCollapse: {
            wrapper: {
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }
        },
        MuiFormControl: {
            root: {
                width: "100%"
            }
        },
        MuiButtonBase: {
            root: {
                '&.search-btn': {
                    padding: '12px 24px',
                    width: '100px',
                    height: '48px',
                    backgroundColor: '#4310AE',
                    boxShadow: '0px 6px 15px rgba(67, 16, 174, 0.12), inset 0px -1px 0px rgba(14, 14, 44, 0.4)',
                    borderRadius: '8px',
                },
            },
        },
        MuiButton: {
            root: {
                '&:hover': {
                    backgroundColor: '#6743b1'
                }
            },
            label: {
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: '#fff',
                fontWeight: 700,
                fontSize: '16px',
                fontFamily: 'Roboto'
            }
        },
        MuiInputBase: {
            root: {
                '&.MuiInput-underline:before': {
                    borderBottom: 'none'
                },
                '&.MuiInput-underline:after': {
                    borderBottom: 'none'
                },
                '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
                    borderBottom: 'none'
                }
            }
        },
        MuiInput: {
            input: {
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '20px',
                display: 'flex',
                alignItems: 'center',
                letterSpacing: '0.25px',
                color: '#4310AE',
                '&::placeholder': {
                    fontWeight: 'normal',
                    color: '#A2A2A2'
                }
            },
        },
        MuiIconButton: {
            root: {
                color: '#05111A'
            }
        },
        MuiTableRow: {
            root: {
                boxShadow: 'inset 0px 1px 0px #E6E7E9, inset 0px -1px 0px #E6E7E9'
            }
        },
        MuiTableCell: {
            root: {
                "&$body": {
                    color: '#05111A'
                },
                borderBottom: 'none',
                textAlign: 'center',
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
        MuiTable:{
            root: {
                // display: 'block',
                
            }
        },
        MuiSvgIcon: {
            root: {
                '&:hover': {
                    color: '#6743b1'
                }
            }
        },
        MuiTableSortLabel: {
            root: {
                "&:hover": {
                    color: '#6743b1'
                },
                "&$active": {
                    color: '#6743b1',
                    '&& $icon': {
                        color: '#6743b1'
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

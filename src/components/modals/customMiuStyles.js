export const customModalStyle = {
    box: {
        sx: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: "70rem",
            borderRadius: 3,
            bgcolor: 'background.paper',
            overflow: "hidden",
            outline: "none",
            boxShadow: 6,

        }
    },
    headerBox: {
        sx: {
            borderBottom: "1px solid #dbdbdb",
            position: 'relative',
            padding: '.7rem 0'
        }
    },
    modalTitle: {
        sx: {
            textAlign: 'center',
            fontWeight: "bold",
            color: "#333",
        }
    },
    selectBtn: {
        sx: {
            fontSize: "1.4rem",
            backgroundColor: '#0095f6',
            textTransform: 'initial',
            padding: '0.2rem 1.5rem'
        }
    },
    overviewBox: {
        sx: {
            display: 'flex',
            flexDirection: "row",
            alignItems: "stretch",
            justifyContent: "center",
            overflow: "hidden",
        }
    },
    imgBox: {
        sx: {
            flex: '3',
            overflow: "inherit",
        }
    },
    captionBox: {
        sx: {
            flex: '2',
            padding: " 2rem 2rem ",
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'stretch'
        }
    },
    uploadBox: {
        sx: {
            minHeight: '30rem',
            display: 'flex',
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "3rem "
        }
    },
    textarea: {
        style: {
            border: "none",
            resize: "none",
            outline: "none",
            width: "100%",
            height: "90%",
            padding: "1rem 0",
            fontFamily: 'inherit',
            fontSize: '1.4rem'
        }
    },
    shareBtn: {
        variant: "text",
        disableRipple: true,
        style: {
            right: 0,
            top: 0,
            position: 'absolute',
            fontSize: '1.4rem',
            textTransform: 'capitalize',
            background: 'none'
        }
    }

}
export const customStyles = {
    box: {
        sx: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: "30vw",
            borderRadius: 3,
            bgcolor: 'background.paper',
            overflow: "hidden",
            outline: "none",
            boxShadow: 6,
            display:'flex',
            flexDirection:"column",
            color:"#333",
            "& a":{
                textAlign:"center"
            }
        }
    },
    button:{
        sx:{
            fontSize:'1.4rem',
            textTransform:'initial',
            fontWeight:"400",
            width:"100%",
            padding:"1.2rem 0",
            borderBottom:"1px solid #dbdbdb",
            "&:hover":{
                background:"none"
            },
            "& a":{
                textDecoration:"none",
                color:"inherit"
            }
        },

    }
}

export const updateCustomStyles = {
    box:{
        sx: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: "40rem",
            height:"40rem",
            borderRadius: 3,
            bgcolor: 'background.paper',
            overflow: "hidden",
            outline: "none",
            boxShadow: 6,

        }
    },
    headerBox: {
        sx: {
            borderBottom: "1px solid #dbdbdb",
            position: 'relative',
            padding: '.7rem 0'
        }
    },
    modalTitle: {
        sx: {
            textAlign: 'center',
            fontWeight: "bold",
            color: "#333",
        }
    },
    shareBtn: {
        variant: "text",
        disableRipple: true,
        style: {
            right: 0,
            top: 0,
            position: 'absolute',
            fontSize: '1.4rem',
            textTransform: 'capitalize',
            background: 'none'
        }
    },
    captionBox: {
        sx: {
            flex: '2',
            padding: " 2rem 2rem ",
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'stretch',
            height:"90%"
        }
    },
    textarea: {
        style: {
            border: "none",
            resize: "none",
            outline: "none",
            width: "100%",
            height: "90%",
            padding: "1rem 0",
            fontFamily: 'inherit',
            fontSize: '1.4rem'
        }
    },
}
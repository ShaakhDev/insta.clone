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
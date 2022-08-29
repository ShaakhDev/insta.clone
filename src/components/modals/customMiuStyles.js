export const customModalStyle = {
    box: {
        sx: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60rem',
            minHeight: '30rem',
            height: 'auto',
            borderRadius: 3,
            bgcolor: 'background.paper',
            overflow: 'hidden',
            outline: 'none',
            boxShadow: 6,
            '@media (max-width:600px)': {
                width: '100%',
                minHeight: '100%',
                height: 'auto',
                borderRadius: 0,
            },
        },
    },
    overview: {
        sx: {
            height: '100%',
            bgcolor: 'background.paper',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
    },
    headerBox: {
        sx: {
            borderBottom: '1px solid #dbdbdb',
            position: 'relative',
            padding: '.7rem 0',
        },
    },
    modalTitle: {
        sx: {
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#333',
        },
    },
    selectBtn: {
        sx: {
            fontSize: '1.4rem',
            backgroundColor: '#0095f6',
            textTransform: 'initial',
            padding: '0.2rem 1.5rem',
        },
    },

    imgBox: {
        sx: {
            // width: '100%',
            width: '60rem',
            height: '60rem',
            '@media (max-width:600px)': {
                width: '100vw',
                height: '100vw',
            },
        },
    },
    captionBox: {
        sx: {
            // flex: '3',
            padding: ' 2rem 2rem ',
            display: 'flex',
            height: '100%',
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'stretch',
            '@media (max-width:600px)': {
                height: '33vh !important',
            },
        },
    },
    uploadBox: {
        sx: {
            minHeight: '30rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: '3rem ',
        },
    },
    textarea: {
        style: {
            border: 'none',
            resize: 'none',
            outline: 'none',
            width: '100%',
            height: '90%',
            padding: '1.5rem 0',
            fontFamily: 'inherit',
            fontSize: '1.4rem',
            minHeight: '7rem',
            '@media (max-width:600px)': {
                minHeight: '20vh',
            },
        },
    },
    shareBtn: {
        variant: 'text',
        disableRipple: true,
        style: {
            right: 0,
            top: 0,
            position: 'absolute',
            fontSize: '1.4rem',
            textTransform: 'capitalize',
            background: 'none',
        },
    },
    closeBtn: {
        variant: 'text',
        disableRipple: true,

        style: {
            left: 0,
            top: 0,
            position: 'absolute',
            background: 'none',
            color: '#333',
        },
    },
    successMsg: {
        sx: {
            position: 'absolute',
            textAlign: 'center',
            top: '75%',
            fontWeight: '300',

            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
    },
};
export const customStyles = {
    box: {
        sx: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '30vw',
            borderRadius: 3,
            bgcolor: 'background.paper',
            overflow: 'hidden',
            outline: 'none',
            boxShadow: 6,
            display: 'flex',
            flexDirection: 'column',
            color: '#333',
            '& a': {
                textAlign: 'center',
            },
            '@media (max-width:600px)': {
                width: '70%',
            },
        },
    },
    button: {
        sx: {
            fontSize: '1.4rem',
            textTransform: 'initial',
            fontWeight: '400',
            width: '100%',
            padding: '1.2rem 0',
            borderBottom: '1px solid #dbdbdb',
            '&:hover': {
                background: 'none',
            },
            '& a': {
                textDecoration: 'none',
                color: 'inherit',
            },
        },
    },
    dbutton: {
        sx: {
            fontSize: '1.5rem',
            textTransform: 'initial',
            width: '100%',
            padding: '1.2rem 0',
            borderBottom: '1px solid #dbdbdb',
            fontWeight: 'bold',
            '&:hover': {
                background: 'none',
            },
            '& a': {
                textDecoration: 'none',
                color: 'inherit',
            },
        },
    },
    heading: {
        variant: 'h4',
        sx: {
            fontWeight: 'bold',
            color: '#333',
            textAlign: 'center',
            margin: '2rem 0 1rem',
        },
    },
    desc: {
        variant: 'h5',
        sx: {
            fontWeight: '400',
            color: '#8e8e8e',
            textAlign: 'center',
        },
    },
};

export const updateCustomStyles = {
    box: {
        sx: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '40rem',
            height: '40rem',
            borderRadius: 3,
            bgcolor: 'background.paper',
            overflow: 'hidden',
            outline: 'none',
            boxShadow: 6,
        },
    },
    headerBox: {
        sx: {
            borderBottom: '1px solid #dbdbdb',
            position: 'relative',
            padding: '.7rem 0',
        },
    },
    modalTitle: {
        sx: {
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#333',
        },
    },
    shareBtn: {
        variant: 'text',
        disableRipple: true,
        style: {
            right: 0,
            top: 0,
            position: 'absolute',
            fontSize: '1.4rem',
            textTransform: 'capitalize',
            background: 'none',
        },
    },

    captionBox: {
        sx: {
            flex: '2',
            padding: ' 2rem 2rem ',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'stretch',
            height: '90%',
        },
    },
    textarea: {
        style: {
            border: 'none',
            resize: 'none',
            outline: 'none',
            width: '100%',
            height: '90%',
            padding: '1rem 0',
            fontFamily: 'inherit',
            fontSize: '1.4rem',
        },
    },
    successMsg: {
        ...customModalStyle.successMsg,
    },
};

export const customConfirmModalStyle = {
    box: {
        sx: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '30vw',
            minHeight: '20rem',
            borderRadius: 3,
            bgcolor: 'background.paper',
            overflow: 'hidden',
            outline: 'none',
            boxShadow: 6,
            padding: '2rem',
            justifyContent: 'space-around',
            textAlign: 'center',
            color: '#333',
        },
    },

    deleteBtn: {
        sx: {
            fontSize: '1.4rem',
            textTransform: 'uppercase',
            fontWeight: '600',
            background: 'none',
            border: '2px solid #d32f2f',
            padding: '.5rem 2.5rem',
            color: '#d32f2f',
            margin: '3rem  0 0',
            '&:hover': {
                background: '#d32f2f',
                color: 'white',
            },
        },
    },
    cancelBtn: {
        sx: {
            fontSize: '1.4rem',
            textTransform: 'uppercase',
            fontWeight: '600',
            background: 'none',
            border: '2px solid #0095f6',
            padding: '.5rem 2.5rem',
            color: '#0095f6',
            margin: '3rem 5rem 0 0',
            '&:hover': {
                background: '#0095f6',
                color: 'white',
            },
        },
    },
};

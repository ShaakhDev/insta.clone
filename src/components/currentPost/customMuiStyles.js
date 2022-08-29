export const muiStyles = {
    card: {
        sx: {
            '@media (max-width: 600px)': {
                maxHeight: '110vh',
                height: 'calc(100vh + 15rem)',
                marginTop: '5rem',
                fontSize: '1.7rem',
            },
        },
    },
    box1: {
        sx: {
            // maxWidth: ,
            display: 'flex',
            flexDirection: 'column',
            // flexBasis: ,
            height: '100%',
            width: '100%',
        },
    },
    box2: {
        sx: {
            width: 'auto',
            display: 'flex',
            flexDirection: 'column',
            minWidth: '35%',
            fontSize: '1.6rem ',
            // flexBasis: 400,
            '@media (max-width: 600px)': {
                width: '100%',
                flexBasis: '100%',
            },
        },
    },
    commentsBox: {
        sx: {
            padding: '0',
            margin: '0',
            flexBasis: '100%',
        },
    },
    header: {
        sx: {
            borderBottom: '.5px solid #dbdbdb',
            padding: '1.8rem 1.2rem 1rem',
            display: 'flex',
            alignItems: 'start',
            '@media (max-width: 600px)': {
                fontSize: '1.6rem',
            },
        },
    },
    subheader: {
        sx: {
            marginTop: '1.5rem',
            fontSize: '1.4rem',
            '@media (max-width: 600px)': {
                fontSize: '1.7rem',
            },
        },
    },
    avatar: {
        sx: {
            width: 32,
            height: 32,
        },
    },
};

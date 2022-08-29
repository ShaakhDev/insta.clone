export const muiStyles = {
    card: {
        sx: {
            maxWidth: '61.4rem',
            margin: '3rem auto 0',
            '@media (max-width: 600px)': {
                margin: '0',
                boxShadow: 'none',
                border: 'none',
            },
        },
    },
    stack: {
        sx: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        spacing: 2,
        direction: 'row',
    },
    innerStack: {
        sx: {
            width: '100%',
            height: '5rem',
            overflow: 'hidden',
            display: 'flex',
            padding: '0',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#fff',
            '@media (max-width: 600px)': {
                border: '1px solid #dbdbdb',
                borderRadius: '3.5rem',
            },
        },
        spacing: 2,
        direction: 'row',
    },
    actions: {
        disableTouchRipple: true,
        disableRipple: true,
    },
};

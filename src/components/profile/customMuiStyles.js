export const profileMuiStyles = {
    editButton: {
        variant: 'outlined',
        sx: {
            border: "1px solid #dbdbdb",
            '&:hover': {
                border: "1px solid #dbdbdb",
                background: 'transparent'
            },
            color: "#333",
            fontSize: '1.3rem',
            textTransform: 'capitalize',
            fontWeight: '500'
        }
    },
    followButton: {
        variant: 'contained',
        sx: {
            textTransform: 'capitalize',
            fontWeight: '500',
            fontSize: '1.4rem',
            padding: "0 2rem !important",
            margin: "0.5rem 0"
        }
    },
    bodyStack: {
        justifyContent: "center",
        alignItems: "center",
        direction: "row",
        spacing: 1,
        padding: '2rem 0'
    }
};
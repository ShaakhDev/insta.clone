export const muiStyles = {
    card: {
        sx: {
            maxWidth: 614,
            margin: "3rem auto 0",
            "@media (max-width: 600px)": {
                margin: '0',
                boxShadow: 'none',
                border: 'none',
            }
        }
    },
    stack: {
        sx: { width: '100%' },
        spacing: 2,
        direction: "row",

    },
    actions: {
        disableTouchRipple: true,
        disableRipple: true,
    }
}
import { isRejectedWithValue } from "@reduxjs/toolkit";

export const rtkQueryErrorLogger = (api) => (next) => (action) => {
    // console.log(next)

    if (isRejectedWithValue(action)) {
        console.log(action.value.response, 'error');
    }
    return next.dispatch(action);
}
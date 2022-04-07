export const useCalculatePostedTime = timestamp => {
    const timePostCreated = new Date(timestamp);
    const timeNow = new Date();
    const difference = (timeNow.getTime() - timePostCreated.getTime()) / 1000;
    const isCurrentYear = !(timeNow.getFullYear() > timePostCreated.getFullYear())
    const ONE_MINUTE = 60
    const ONE_HOUR = 3600;
    const ONE_DAY = 86400;
    const ONE_WEEK = 604800;
    const MONTHS = [
        "JANUARY",
        "FEBRUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMBER",
        "OCTOBER",
        "NOVEMBER",
        "DECEMBER"
    ]

    if (difference < ONE_MINUTE) return `${difference}  SECONDS AGO`;
    else if (difference < ONE_HOUR) return `${Math.round(difference / ONE_MINUTE)}  MINUTES AGO`;
    else if (difference < ONE_DAY) return `${Math.round(difference / ONE_HOUR)} HOURS AGO`;
    else if (difference < ONE_WEEK) return `${Math.floor(difference / ONE_DAY)} DAYS AGO`;
    else return isCurrentYear ?
            `${MONTHS[timePostCreated.getMonth()]} ${timePostCreated.getDate()}` :
            `${MONTHS[timePostCreated.getMonth()]} ${timePostCreated.getDate()}, ${timePostCreated.getFullYear()}`
}

export const useCalculateCommentedTime = (timestamp) => {
    const timeCommentCreated = new Date(timestamp);
    const timeNow = new Date();
    const difference = (timeNow.getTime() - timeCommentCreated.getTime()) / 1000;
    const ONE_MINUTE = 60
    const ONE_HOUR = 3600;
    const ONE_DAY = 86400;
    const ONE_WEEK = 604800;

    if (difference < ONE_MINUTE) return `${difference}s`;
    else if (difference < ONE_HOUR) return `${Math.round(difference / ONE_MINUTE)}m`;
    else if (difference < ONE_DAY) return `${Math.round(difference / ONE_HOUR)}h`;
    else if (difference < ONE_WEEK) return `${Math.floor(difference / ONE_DAY)}d`;
    else return `${Math.floor(difference / ONE_WEEK)}w`;
}

export const useCalculateDate = (timestamp) => {
    const timeCommentCreated = new Date(timestamp);

    const MONTHS = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]

    return `${MONTHS[timeCommentCreated.getMonth()]} ${timeCommentCreated.getDate()}, ${timeCommentCreated.getFullYear()}`
}
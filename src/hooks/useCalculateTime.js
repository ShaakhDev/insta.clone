
const useCalculateTime = (timestamp) => {
    const timePostCreated = new Date(timestamp);
    const timeNow = new Date();
    const difference = (timeNow.getTime() - timePostCreated.getTime()) / 1000;
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

    if (difference < ONE_HOUR) return `${Math.round(difference / 60)}  MINUTES AGO`;
    else if (difference < ONE_DAY) return `${Math.round(difference / (60 * 60))} HOURS AGO`;
    else if (difference < ONE_WEEK) return `${Math.floor(difference / (60 * 60 * 24))} DAYS AGO`;
    else return `${MONTHS[timePostCreated.getMonth()] } ${timePostCreated.getDate()}`
}

export default  useCalculateTime;
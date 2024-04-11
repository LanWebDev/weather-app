import moment from "moment";

export const unixToTime = (unix: number, timezone: number) => {
  return moment
    .unix(unix)
    .utcOffset(timezone / 60)
    .format("HH:mm");
};

export const unixToDay = (unix: number) => {
  return moment.unix(unix).format("ddd");
};

export const toFahrenheit = (celsius: number) => {
  return Math.round((celsius * 9) / 5 + 32);
};

import moment from "moment";

export const unixToDay = (unix: number) => {
  return moment.unix(unix).format("ddd");
};

export const toFahrenheit = (celsius: number) => {
  return Math.round((celsius * 9) / 5 + 32);
};

export function dayState(icon: string) {
  return icon.slice(2, 3);
}

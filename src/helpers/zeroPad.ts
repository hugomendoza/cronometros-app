export const zeroPad = (value:number) => {
  return value < 10 ? `0${value}` : value
}

import { replace } from 'lodash';
import numeral from 'numeral';

// ----------------------------------------------------------------------

export function fCurrency(number) {
  return numeral(number).format(Number.isInteger(number) ? '$0,0' : '$0,0.00');
}

export function fPercent(number) {
  return numeral(number / 100).format('0.0%');
}

export function fNumber(number) {
  return numeral(number).format();
}

export function fShortenNumber(number) {
  return replace(numeral(number).format('0.00a'), '.00', '');
}

export function fData(number) {
  return numeral(number).format('0.0 b');
}

export function f(number) {
  return new Intl.NumberFormat().format(number);
}

export const calculatorDayCommented = (timeComment) => {
  let distance = Math.round((new Date().getTime() - timeComment) / (1000))
  switch (true) {
    case 0 <= distance && distance <= 59:
      return distance + "s"
    case 60 <= distance && distance < 3600:
      return Math.round(distance / 60) + "m"
    case 3600 <= distance && distance < (3600 * 24):
      return Math.round(distance / (60 * 60)) + "h"
    case 3600 * 24 <= distance :
      return Math.round((distance / (60 * 60 * 24))) + "d"
    default:
      break;
  }
}


export const convertTimeStampToDateDMY = (timeStamp) => {
  let time = new Date(timeStamp)
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let minute = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
  return time.getDate() + " " + months[time.getMonth()] + " " + time.getFullYear();
}
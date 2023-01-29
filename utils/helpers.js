import { PHONE_REGX } from '../constants/pate';
import { format, convDate } from 'date-fns';
const SHORT_MONTH = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
};
export function dateIsBeforeToday(testDate) {
    // let testDate = '2022-01-15';

    let target = testDate.split('-');

    let tYear = parseInt(target[0]);
    // return true;
    let tMonth = parseInt(target[1]);
    let tDay = parseInt(target[2]);

    var todayDate = new Date().toISOString().slice(0, 10);
    let standard = todayDate.toString().split('-');
    let sYear = parseInt(standard[0]);
    let sMonth = parseInt(standard[1]);
    let sDay = parseInt(standard[2]);
    let results = null;
    let spot = 0;
    if (tYear < sYear) {
        spot = 1;
        results = true;
    } else if (tYear === sYear && tMonth < sMonth) {
        spot = 2;
        results = true;
    } else if (tYear === sYear && tMonth === sMonth && tDay < sDay) {
        spot = 3;
        results = true;
    } else {
        spot = 4;
        results = false;
    }
    return results;
}
export async function getUniqueId() {
    const digest = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        new Date().toString() + Math.random().toString()
    );
    return digest;
}
export function AWSTimeForEventCard(value) {
    // AWS Time in is 12:30:00-05:00
    const hr = value.slice(0, 2);
    const mn = value.slice(3, 5);
    let theHour = '';
    let ampm = '';
    if (parseInt(hr) < 12) {
        theHour = hr;
        ampm = 'am';
    } else {
        ampm = 'pm';
        //convert and make sure we have two digits
        const whole = parseInt(hr);
        if (whole > 12) {
            theHour = whole - 12;
        } else {
            theHour = whole;
        }
    }
    const returnValue = theHour + ':' + mn + ampm;
    console.log('H:76=>returnValue: ', returnValue);
    return returnValue;
}
export function prettyTime(pateTime) {
    // will get 24 hour minutes...  1330 = 2L39pm
    //sometimes we may get :
    const testValue = pateTime.replace(':', '');
    const hr = testValue.slice(0, 2);
    const min = testValue.slice(2);
    let theHour = '';
    let ampm = '';
    if (parseInt(hr) < 12) {
        theHour = hr;
        ampm = 'am';
    } else {
        ampm = 'pm';
        //convert and make sure we have two digits
        const whole = parseInt(hr);
        if (whole > 12) {
            theHour = whole - 12;
        } else {
            theHour = whole;
        }
    }
    const returnValue = theHour + ':' + min + ampm;
    return returnValue;
}
export function getToday() {
    var d = new Date();
    //- this was in the function originally, but it does not give today
    // d.setDate(d.getDate() - 1); // date - one
    const dminusone = d.toLocaleString(); //  M/DD/YYYY, H:MM:SS PM

    let datetime = dminusone.split(', '); // M/DD/YYYY
    const dateparts = datetime[0].split('/');
    const yr = dateparts[2];
    const mn = dateparts[0] < 10 ? '0' + dateparts[0] : dateparts[0];
    const da = dateparts[1];
    const target = yr + '-' + mn + '-' + da;
    return target;
}
// export function printObject(label, target) {
//     const util = require('util');
//     console.log(
//         label,
//         ':  \n' +
//             util.inspect(target, {
//                 showHidden: false,
//                 depth: null,
//             })
//     );
// }
export function printObject(label, target) {
    console.log(label, JSON.stringify(target, null, 2));
}

export const CONFIG = {
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
};
export function checkPatePhoneValue(patePhone) {
    console.log('type of patePhone:', typeof patePhone);
    if (patePhone.length !== 10) {
        return false;
    }
    if (isNaN(patePhone)) {
        // not a patePhone number
        return false;
    } else {
        return true;
    }
}
export function getPhoneType(patePhone) {
    // this returns true if patePhone is in format of "(123) 233-3232"
    let result = patePhone.match(PHONE_REGX);
    if (result) {
        if (patePhone.length === 10) {
            return 'PATE';
        } else {
            return 'MASKED';
        }
    } else {
        return null;
    }
}
export function transformPatePhone(patePhone) {
    // we take patePhone 1234567890 and return (123) 456-7890

    if (isNaN(patePhone) || patePhone === null) {
        // not a patePhone number
        return null;
    } else {
        let p1 = patePhone.substring(0, 3);
        let p2 = patePhone.substring(3, 6);
        let p3 = patePhone.substring(6);
        let returnValue = '(' + p1 + ') ' + p2 + '-' + p3;
        return returnValue;
    }
}
export function createPatePhone(inputPhone) {
    // we expect (208) 424-2494 need 2084242494
    // if (inputPhone.length > 0) {
    //     let result = inputPhone.match(PHONE_REGX);
    //     if (result === null) {
    //         return null;
    //     }
    // } else {
    //     return null;
    // }
    if (inputPhone.length < 1) {
        return null;
    }
    let p1 = inputPhone.substring(1, 4);
    let p2 = inputPhone.substring(6, 9);
    let p3 = inputPhone.substring(10);
    // console.log('p1', p1);
    // console.log('p2', p2);
    // console.log('p3', p3);
    let patePhone = p1 + p2 + p3;
    return patePhone;
}
export function createMtgCompKey(client, meetingDate) {
    let mtgCompKey =
        client +
        '#' +
        meetingDate.substring(0, 4) +
        '#' +
        meetingDate.substring(5, 7) +
        '#' +
        meetingDate.substring(8, 10);
    return mtgCompKey;
}
export function capitalize(textString) {
    if (!textString) {
        return null;
    }
    const word = textString;
    const lower = word.toLowerCase();
    const first = word.charAt(0);
    const upper = first.toUpperCase();
    const remainder = lower.slice(1);
    const returnValue = upper + remainder;
    return returnValue;
}
export function createGrpCompKey(client, meetingId) {
    let grpCompKey = client + '#' + meetingId;
    return grpCompKey;
}
export async function asc_sort(a, b) {
    return new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime();
}
export async function desc_sort(a, b) {
    return new Date(b.eventDate).getTime() - new Date(a.eventDate).getTime();
}
export async function desc_sort_raw(a, b) {
    return b.eventDate - a.eventDate;
}
export async function asc_sort_raw(a, b) {
    return a.eventDate - b.eventDate;
}
export function getFormattedDate(date) {
    return date.toISOString().slice(0, 10);
}
export function dateNumToJSDate(dateNum) {
    // YYYYMMDD to JSDate
    if (!dateNum) {
        return null;
    }
    if (dateNum.length < 8) {
        return null;
    }
    const year = +dateNum.substring(0, 4);
    const month = +dateNum.substring(4, 6);
    const day = +dateNum.substring(6, 8);
    const javaScriptDate = new Date(year, month - 1, day);
    return javaScriptDate;
}
export function formatEventCardFrontDate(value) {
    // converts "2023-04-03" to "Friday, March 3rd"
    const result = format(new Date(value), 'EEEE, LLLL do');
    return result;
}
export function dateNumsToLongDayLongMondayDay(dateNum) {
    if (!dateNum) {
        return null;
    }
    // YYYYMMDD to long date
    const convDate = dateNumToJSDate(dateNum);
    const result = format(convDate, 'EEEE, LLLL do');
    return result;
}
export function dateNumToDateDash(dateNum) {
    // converts YYYYMMDD to YYYY-MM-DD
    if (!dateNum) {
        return null;
    }
    if (dateNum.length !== 8) {
        return '';
    }
    const y = dateNum.substr(0, 4);
    const m = dateNum.substr(4, 2);
    const d = dateNum.substr(6);
    const returnValue = y + '-' + m + '-' + d;
    return returnValue;
}
export function getDateMinusDays(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
export function subtractMonths(numOfMonths, date = new Date()) {
    date.setMonth(date.getMonth() - numOfMonths);

    return date;
}
export function dateDashToDateObject(dateDash) {
    if (!dateDash) {
        return null;
    }
    let dashPos = dateDash.indexOf('-');
    if (dashPos === -1) {
        return null;
    }
    let datePart = dateDash.split('-');
    let newDate = new Date(datePart[0], datePart[1] - 1, datePart[2]);
    return newDate;
}
export function dateDashMadePretty(dateDash) {
    if (!dateDash) {
        return null;
    }
    let dashPos = dateDash.indexOf('-');
    if (dashPos === -1) {
        return null;
    }
    let datePart = dateDash.split('-');
    let newDate = new Date(datePart[0], datePart[1] - 1, datePart[2]);
    let prettyDate = newDate.toDateString();
    return prettyDate;
}
export function isDateDashBeforeToday(dateDash) {
    // uses dashDate yyyy-mm-dd
    //check if we have any dashes
    if (!dateDash) {
        return null;
    }
    let dashPos = dateDash.indexOf('-');
    if (dashPos === -1) {
        return null;
    }
    let datePart = dateDash.split('-');
    //need to increment month
    let mo = parseInt(datePart[1] - 1);
    let mDate = new Date(parseInt(datePart[0]), mo, parseInt(datePart[2]));
    let testDate = new Date(mDate.toDateString());
    return testDate < new Date(new Date().toDateString());
}

export function dateNumToDisplayTime(numTime) {
    if (!numTime) {
        return null;
    }
    // 1330 or 13:30 to 1:30 PM
    let A = '';
    let B = '';
    let confirmedValue;
    // the length of numTime can only be 4 or 5 characters, if not return ""
    if (numTime.length < 4 || numTime.length > 5) {
        console.log('1');
        return '';
    }
    if (numTime.length === 4) {
        const colon = numTime.indexOf(':');
        if (colon === -1) {
            //no colon, split the numbers and stick colon in.
            A = numTime.substr(0, 2);
            B = numTime.substr(2);
            let returnValue = A + ':' + B;
            confirmedValue = returnValue;
        } else {
            let parts = numTime.split(':');
            let returnValue = parts[0] + ':' + parts[1];
            confirmedValue = returnValue;
        }
    } else if (numTime.length === 5) {
        const colon = numTime.indexOf(':');
        if (colon === -1) {
            return '';
        } else {
            confirmedValue = numTime;
        }
    }
    let timeParts = confirmedValue.split(':');

    // Get the hours of 29 February 2012 11:45:00:
    try {
        const result = new Date(2012, 1, 29, timeParts[0], timeParts[1]);
        const returnTime = format(result, 'h:mm a');
        return returnTime;
    } catch (error) {
        return '';
    }
}
export function getPateDate(dateTimeNumber) {
    // takes dateStamp and returns YYYYMMDD
    // this gets the time dateStamp and returns P8 date string "YYYYMMDD"
    let inputDate = new Date(dateTimeNumber);

    let yr = String(inputDate.getFullYear());
    let mo = String(inputDate.getMonth() + 1);
    let da = String(inputDate.getDate());
    // now see if we need to add zero to month
    if (parseInt(mo) < 10) {
        mo = '0' + mo;
    }
    // now see if we need to add zero to day of month
    if (parseInt(da) < 10) {
        da = '0' + da;
    }
    let returnValue = yr + mo + da;
    return returnValue;
}
export function getPateTime(dateTimeNumber) {
    // dateTimeStamp to 1230
    let inputDate = new Date(dateTimeNumber);
    let h = String(inputDate.getHours());
    let m = String(inputDate.getMinutes());
    //add zeros if necessary
    if (parseInt(h) < 10) {
        h = '0' + h;
    }
    if (parseInt(m) < 10) {
        m = '0' + m;
    }
    let returnValue = h + m;
    return returnValue;
}
export function pateDateToSpinner(pDate) {
    // this takes in pateDate (YYYYMMDD) and returns Date object
    //break apart
    let y = pDate.substring(0, 4);
    let m = pDate.substring(4, 6);
    let d = pDate.substring(6);
    let date = new Date(y, m - 1, d);
    return date;
}
export function pateDateToShortMonthDay(pDate) {
    let y = pDate.substring(0, 4);
    let m = pDate.substring(4, 6);
    let d = pDate.substring(6);
    let mo = SHORT_MONTH[parseInt(m)];
    let returnDate = mo + ' ' + d;
    return returnDate;
}
export function convertPateDate(pDate) {
    //break apart
    let y = pDate.substring(0, 4);
    let m = pDate.substring(4, 6);
    let d = pDate.substring(6);
    let date = new Date(y, m - 1, d);
    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };
    let returnValue = date.toLocaleDateString('en-us', options);
    return returnValue;
}
export function convertPateTime(pTime) {
    //break apart, always 2 digits and 2 digits
    let ho = pTime.substring(0, 2);
    let mi = pTime.substring(2);
    //determine if AM or PM
    let half = 'AM';
    if (parseInt(ho) < 12) {
        half = 'AM';
    } else {
        half = 'PM';
    }
    if (parseInt(ho) < 13) {
        ho = ho * 1; // this gets rid of leading zero if applicable
    } else {
        ho = ho - 12;
    }
    let returnValue = ho + ':' + mi + ' ' + half;
    return returnValue;
}
export function pateTimeToSpinner(pDate, pTime) {
    //this takes pDate and pTime and returns date object
    let y = pDate.substring(0, 4);
    let m = pDate.substring(4, 6);
    let d = pDate.substring(6);
    let date = new Date(y, m - 1, d);

    //break apart, always 2 digits and 2 digits
    let ho = pTime.substring(0, 2);
    let mi = pTime.substring(3);

    date.setHours(ho);
    date.setMinutes(mi);

    return date;
}
export function todayMinus60() {
    const today = new Date();

    document.write('Today is: ' + d.toLocaleString());

    today.setDate(d.getDate() - 60);

    return today;
}

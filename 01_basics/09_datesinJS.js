// dates

let myDate = new Date() // created object of date or instance

// console.log(myDate.toString()); //Complete date, time and timezone
// console.log(myDate.toDateString()); // Only the date (day, month, year)
// console.log(myDate.toISOString()); // Date and time in ISO format (UTC)
// console.log(myDate.toJSON()); //Date and time in JSON-compatible ISO format
// console.log(myDate.toLocaleDateString()); // Date in your local format uses /
// console.log(myDate.toLocaleString()); // Date and time in your local format; uses / for date and : for time

/*
1. ISO Format (toISOString())
- ISO stands for International Organization for Standardization.
- It is a standard format used to represent dates and times so computers worldwide can understand them.
- Format: YYYY-MM-DDTHH:mm:ss.sssZ
Example:
myDate.toISOString();
// 2026-11-26T07:30:00.000Z

Here:
- 2026-11-26 → Date (Year-Month-Day)
- T → Separates date and time.
- 07:30:00 → Time (Hours:Minutes:Seconds).
- .000 → Milliseconds.
- Z → Indicates UTC timezone.

2. UTC (Coordinated Universal Time)
- UTC is the standard reference time used worldwide.
- Different countries have different local times based on UTC.
- India follows IST (Indian Standard Time), which is UTC + 5:30.
Example:
- UTC = 7:30 AM
- IST = 1:00 PM
Remember: toISOString() always converts the date and time into UTC.

3. JSON (toJSON())
- JSON stands for JavaScript Object Notation.
- It is a format used to store and exchange data between applications.
- JSON does not have a separate Date data type, so dates are represented as strings.
- toJSON() converts a JavaScript Date object into an ISO-formatted string.
Example:
myDate.toJSON();
// "2026-11-26T07:30:00.000Z"


Difference between toISOString() and toJSON()
Both return the same ISO-formatted date-time string for a valid Date object.
myDate.toISOString();
myDate.toJSON();


In short:
- toISOString() → Converts date and time into standard ISO format (UTC).
- toJSON() → Converts a Date object into a string suitable for JSON data exchange.
- UTC → Standard reference time used worldwide.
 */

// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23) // month starts from 0 in js if written like this whereas in dd-mm-yy format starts from 1
// let myCreatedDate = new Date(2023, 0, 2, 5, 3)
//let myCreatedDate = new Date("2023-01-14") // yy-mm-dd
let myCreatedDate = new Date("01-14-2025") // dd-mm-yy
// console.log(myCreatedDate.toLocaleString());

let myTimestamp = Date.now() //Gives the current timestamp. No Date object required.
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime()); // Gives the timestamp of a particular Date object. Requires a Date object
// //Both Date.now() and .getTime() return the timestamp in milliseconds.
// //Timestamp means the number of milliseconds passed since 1 January 1970, 00:00:00 UTC
// console.log(Math.floor(Date.now()/1000)); // to get in seconds


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1); // Because in JavaScript, months are indexed from 0, not 1

// `${newDate.getDay()} and the time   `

newDate.toLocaleString('default', {
    weekday: "long",
}) 
 // toLocaleString() formats a date according to a specified locale. The weekday option controls how the weekday is displayed (long, short, or narrow). "long" - Thursday, "short" - Thu, "narrow" -T. 'default' → Uses the default locale (language and regional formatting settings) of the environment.




 
 
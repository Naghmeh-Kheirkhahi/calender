let currentDate = new Date();

console.log(currentDate);

let currentDay = currentDate.getDay();
console.log(currentDay);

let currentMonth = currentDate.getMonth();
console.log(currentMonth);

currentDate.setMonth(0);
console.log(currentDate);

currentDate.setDate(1);
console.log(currentDate);
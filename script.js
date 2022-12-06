const months = [{monthName:'January' , daysNum: 31}, {monthName: 'February' , daysNum: 28}, {monthName: 'March' , daysNum: 31}, {monthName: 'April' , daysNum: 30}, {monthName: 'May' , daysNum: 31}, {monthName: 'June' , daysNum: 30}, {monthName: 'July' , daysNum: 31}, {monthName: 'August' , daysNum: 31}, {monthName: 'September' , daysNum: 30}, {monthName: 'October' , daysNum: 31}, {monthName: 'November' , daysNum: 30}, {monthName: 'December' , daysNum: 31}];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let goback = document.getElementById('goback');
let gofor = document.getElementById('gofor');

let tableId = document.getElementById('tableId');

let monthName = document.getElementById('monthName');
let yearName = document.getElementById('yearName');
let specifiedDay = document.getElementById('specifiedDay');

let currentDate = new Date();



gofor.addEventListener ('click' , f =>{
    let currentMonth = currentDate.getMonth();
    currentDate.setMonth(currentMonth+1);
        
    initialMonth();
})

goback.addEventListener ('click' , b =>{
    let currentMonth = currentDate.getMonth();
    currentDate.setMonth(currentMonth-1);    

    initialMonth();
})

initialMonth();


function initialMonth(){
    currentDate.setDate(1);

    monthName.innerHTML = months[currentDate.getMonth()].monthName;
    yearName.innerHTML = ', ' + currentDate.getFullYear();

    removeLastData();
    

    let start = 1;
    let end = 7 - currentDate.getDay(); //this is 8 - (currentDate.getDay() +1) because the array showing the number of days starts with 0, so the fifth day has number 4. 

    for (let index = 0; index < 6; index++) {

        let offset;
        if (end - start == 6 || index != 0) {
            offset = 0;
        }
        else {
            offset = currentDate.getDay(); // because the array showing the number of days starts with 0, the number of the first day in the array is equal to offset.
        }


        const week = initialWeek(start , end , offset);
        tableId.appendChild(week);

        start = end + 1; 
        end = start + 6;

        if (end > months[currentDate.getMonth()].daysNum) {
            end = months[currentDate.getMonth()].daysNum;
        }
    }
}


function removeLastData(){

    let temp = tableId.querySelectorAll(".temp");
    for (let index = 0; index < temp.length; index++) {
        tableId.removeChild(temp[index]);
    }
    
}


function initialWeek (start , end , offset){

    let today = new Date();
    let currentDay = today.getDate();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    const tr = document.createElement('tr');
    tr.className = 'temp';

    for (let index = 0; index < offset; index++) {
        const td = document.createElement('td');
        tr.appendChild(td);
    }


    for (let index = start; index < end+1 ; index++) {
        const td = document.createElement('td');
        td.innerText = index;
        tr.appendChild(td);

        // console.log('----------------');
        // console.log(yearName.innerText);
        // console.log(currentYear);
        // console.log(monthName.innerText);
        // console.log(months[currentMonth].monthName);
        // console.log(index);
        // console.log(currentDay);

        if (yearName.innerText === ', ' + currentYear && 
            monthName.innerText === months[currentMonth].monthName &&  
            index === currentDay) {
            
            td.style.color = 'red';
        }
    }

    return tr;
}



tableId.td.addEventListener ('click' , t =>{
    td.style.border = '1px solid rgb(255, 145, 0)';
    td.style.borderRadius = '5px';
    td.style.backgroundColor = 'rgb(255, 145, 0)';
    td.style.fontWeight = 'bold';

    specifiedDay.innerText = tableId.td.innerText;
})

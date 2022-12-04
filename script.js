const months = [{monthName:'January' , daysNum: 31}, {monthName: 'February' , daysNum: 28}, {monthName: 'March' , daysNum: 31}, {monthName: 'April' , daysNum: 30}, {monthName: 'May' , daysNum: 31}, {monthName: 'June' , daysNum: 30}, {monthName: 'July' , daysNum: 31}, {monthName: 'August' , daysNum: 31}, {monthName: 'September' , daysNum: 30}, {monthName: 'October' , daysNum: 31}, {monthName: 'November' , daysNum: 30}, {monthName: 'December' , daysNum: 31}];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let goback = document.getElementById('goback');
let gofor = document.getElementById('gofor');

let tableId = document.getElementById('tableId');

let monthName = document.getElementById('monthName');
let yearName = document.getElementById('yearName');
let specifiedDay = document.getElementById('specifiedDay');


let currentDate = new Date();


// showCurrentDate();

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
    let end = 8 - currentDate.getDay();
    for (let index = 0; index < 6; index++) {

        let offset;
        if (end - start == 6 || index != 0) {
            offset = 0;
        }
        else {
            offset = currentDate.getDay() -1;
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
    
    const tr = document.createElement('tr');
    tr.className = 'temp';

    for (let index = 0; index < offset; index++) {
        const td = document.createElement('td');
        tr.appendChild(td);
    }

    for (let index = start; index < end+1 ; index++) {
        const td = document.createElement('td');
        td.innerHTML = index;
        tr.appendChild(td);
    }

    return tr;
}


// function showCurrentDate(){
//     let currentDay = currentDate.getDay();
//     let currentMonth = currentDate.getMonth();
//     let currentYear = currentDate.getFullYear();

//     if (yearName.innerText === currentYear && 
//         months[currentDate.getMonth()].monthName === currentMonth &&  
//         td.innerText === currentDay) {
        
//         td.style.color = 'red';
//     }
// }


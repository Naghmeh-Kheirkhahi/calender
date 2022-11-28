const months = [{monthName:'January' , monthStart: 7, daysNum: 31}, {monthName: 'February' , monthStart: 3, daysNum: 28}, {monthName: 'March' , monthStart: 3, daysNum: 31}, {monthName: 'April' , monthStart: 6, daysNum: 30}, {monthName: 'May' , monthStart: 1, daysNum: 31}, {monthName: 'June' , monthStart: 4, daysNum: 30}, {monthName: 'July' , monthStart: 6, daysNum: 31}, {monthName: 'August' , monthStart: 2, daysNum: 31}, {monthName: 'September' , monthStart: 5, daysNum: 30}, {monthName: 'October' , monthStart: 7, daysNum: 31}, {monthName: 'November' , monthStart: 3, daysNum: 30}, {monthName: 'December' , monthStart: 5, daysNum: 31}];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let goback = document.getElementById('goback');
let gofor = document.getElementById('gofor');

let tableId = document.getElementById('tableId');

let monthName = document.getElementById('monthName');

let i = 0;

gofor.addEventListener ('click' , f =>{
        monthName.innerHTML = months[++i];

        if (i == 11) {
            monthName.innerHTML = months[0];
        }
})

goback.addEventListener ('click' , b =>{
        monthName.innerHTML = months[--i];

        if (i == 0) {
            monthName.innerHTML = months[11];
        }
})

initialMonth();


function initialMonth (){

    let start = 1;
    let end = 8 - months[0].monthStart;
    for (let index = 0; index < 6; index++) {

        let offset;
        if (end - start == 6 || index != 0) {
            offset = 0;
        }
        else {
            offset = months[0].monthStart -1;
        }


        const week = initialWeek(start , end , offset);
        tableId.appendChild(week);

        start = end + 1; 
        end = start + 6;

        if (end > months[0].daysNum) {
            end = months[0].daysNum;
        }
    }
}


function initialWeek (start , end , offset){
    
    const tr = document.createElement('tr');

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
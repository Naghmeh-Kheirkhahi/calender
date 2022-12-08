const months = [{monthName:'January' , daysNum: 31}, {monthName: 'February' , daysNum: 28}, {monthName: 'March' , daysNum: 31}, {monthName: 'April' , daysNum: 30}, {monthName: 'May' , daysNum: 31}, {monthName: 'June' , daysNum: 30}, {monthName: 'July' , daysNum: 31}, {monthName: 'August' , daysNum: 31}, {monthName: 'September' , daysNum: 30}, {monthName: 'October' , daysNum: 31}, {monthName: 'November' , daysNum: 30}, {monthName: 'December' , daysNum: 31}];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let goback = document.getElementById('goback');
let gofor = document.getElementById('gofor');

let tableId = document.getElementById('tableId');

let monthName = document.getElementById('monthName');
let yearName = document.getElementById('yearName');
let specifiedDay = document.getElementById('specifiedDay');

let currentDate = new Date();

const selectedDay = {year: '' , month: '' , day: ''};



gofor.addEventListener ('click' , f =>{

    let currentMonth = currentDate.getMonth();
    currentDate.setMonth(currentMonth + 1);

    specifiedDay.style.display = 'none';

    initialMonth();
})

goback.addEventListener ('click' , b =>{

    let currentMonth = currentDate.getMonth();
    currentDate.setMonth(currentMonth - 1);  
    
    specifiedDay.style.display = 'none';

    initialMonth();
})


initialMonth();



function initialMonth(){
    currentDate.setDate(1);

    monthName.innerText = months[currentDate.getMonth()].monthName;
    yearName.innerText = currentDate.getFullYear();

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

        if (yearName.innerText == currentYear && 
            monthName.innerText === months[currentMonth].monthName &&  
            index === currentDay) { // == means string and number are the same but === means both sides must be numbers or strings. string + number = string
            
            td.style.color = 'red';
            td.style.fontWeight = 'bolder'
        }


        if (selectedDay.year == yearName.innerText && 
            selectedDay.month === monthName.innerText &&  
            index == selectedDay.day) { // == means string and number are the same but === means both sides must be numbers or strings. string + number = string
            
            td.classList.add('click-specified-date'); // classi ro be classhaye td add mikonim. classList mese list bahash raftar mishe eine array hast. className be esm kar dare.
            specifiedDay.style.display = 'flex';
            specifiedDay.innerText = td.innerText;
        }


        td.addEventListener ('click' , t =>{

            let spDate = tableId.querySelectorAll(".click-specified-date");
            for (let index = 0; index < spDate.length; index++) {
                spDate[index].classList.remove('click-specified-date');
            }

            td.classList.add('click-specified-date'); // classi ro be classhaye td add mikonim. classList mese list bahash raftar mishe eine array hast. className be esm kar dare.
            specifiedDay.style.display = 'flex';
            specifiedDay.innerText = td.innerText;

            selectedDay.year = yearName.innerText;
            selectedDay.month = monthName.innerText;
            selectedDay.day = specifiedDay.innerText;
        })
    }

    return tr;
}



let today=new Date()
let new_year=new Date(2023,0,1,00)
let result
let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;

let day,hours,minutes,seconds


result=new_year-today


day=Math.floor(result/_day)


console.log(days)
console.log(today)
console.log(new_year)
console.log(day)

document.getElementById("days").innerHTML= `${day} <br> days`



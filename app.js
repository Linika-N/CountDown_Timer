let today=new Date();
let new_year=new Date(2023,0,1,00)-today;
let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day =_hour * 24;


let days,hours,minutes,seconds

days=Math.floor(new_year/_day)
hours=Math.floor(new_year%_day/_hour)
minutes=Math.floor(new_year%_day%_hour/_minute)
seconds=Math.floor(new_year%_day%_hour%_minute/_second)


document.getElementById("days").innerHTML= `${days} <br> days`
document.getElementById("hours").innerHTML= `${hours} <br> hours`
document.getElementById("minutes").innerHTML= `${minutes} <br> minutes`
document.getElementById("seconds").innerHTML= `${seconds} <br> seconds`





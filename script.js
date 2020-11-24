function formatDate(date){
let hours= currentTime.getHours();
if (hours <10){
    hours=`0${hours}`;
}
let minutes=currentTime.getMinutes();
if (minutes<10){
    minutes=`0${minutes}`;
}
days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
let day =days[dayindext];
return`${days[dayindext]} ${hours}:${minutes}`;
}
 let dateElement=document.querySelector("#date");
 let currentTime= new Date();
dateElement.innerHTML= formatDate(currentTime);


//api info//
let apiKey = "a67bcee8bc3862ba2da27468ca9d60a2";
let units = "metric";

let latitude= position.coords.latitude;
let longitude= position.coords.longitude;
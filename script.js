let dateElement=document.querySelector("#date");
let currentTime= new Date();
let hours= currentTime.getHours();
let minutes=currentTime.getMinutes();
console.log(hours,minutes);

let dayIndex=currentTime.getDay();
let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
let day=days[date.getDay()];


dateElement.innerHTML= `${hours}:${minutes};


//api info//
let apiKey = "a67bcee8bc3862ba2da27468ca9d60a2";
let units = "metric";

let latitude= position.coords.latitude;
let longitude= position.coords.longitude;
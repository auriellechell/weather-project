let now = new Date();
let d = document.querySelector("d");
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];
d.innerHTML = `${day} ${month} ${date} ${year}, ${hour}:${minutes}`;

 


//days of week array//
let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
let day=days[date.getDay()];
//api info//
let apiKey = "a67bcee8bc3862ba2da27468ca9d60a2";
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

let latitude= position.coords.latitude;
let longitude= position.coords.longitude;
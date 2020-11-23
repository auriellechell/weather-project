

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let currentYear = date.getFullYear();
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();

  let formattedDate = `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;

  return formattedDate;
}




//days of week array//
let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
let day=days[date.getDay()];
//api info//
let apiKey = "a67bcee8bc3862ba2da27468ca9d60a2";
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

let latitude= position.coords.latitude;
let longitude= position.coords.longitude;
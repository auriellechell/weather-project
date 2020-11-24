function search(event){
    event.preventDefault();
      
    let apiKey = "a67bcee8bc3862ba2da27468ca9d60a2";
    let units = "metric";
    let city =document.querySelector("#city-input").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTempature);
  }




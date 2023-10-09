let url = "http://api.weatherapi.com/v1/current.json?key=27a6abae792b4f47b6915037230310&q=Surabaya&aqi=no";

function loadWeather() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let JSONDoc = JSON.parse(xhttp.responseText);
            let cityName = JSONDoc.location.name;
            let temp = JSONDoc.current.temp_c;
            let weather = JSONDoc.current.condition.text;
            let kph = JSONDoc.current.wind_kph;
            const weatherInfo = "Location: " + cityName + "<br/>" + "Temperature: " + temp + "°C<br/>" + "Description: " + weather + "<br/>Wind Speed: " + kph + " km/h";
            const weatherInfoContainer = document.getElementById("weatherInfo");
            weatherInfoContainer.innerHTML = weatherInfo;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

loadWeather();

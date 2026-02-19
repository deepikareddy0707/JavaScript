let temperature = 25;

let weather = (temperature > 30) ? "Hot" :
              (temperature >= 20) ? "Warm" :
              (temperature >= 10) ? "Cool" : "Cold";

console.log("Weather:", weather);

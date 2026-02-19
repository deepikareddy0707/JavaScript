function convertTemperature(temp, scale) {
    if (scale === "C") {
        return (temp - 32) * 5 / 9;
    } else if (scale === "F") {
        return (temp * 9 / 5) + 32;
    } else {
        return "Invalid scale. Use 'C' or 'F'.";
    }
}

console.log("32°F to Celsius:", convertTemperature(32, "C"));
console.log("0°C to Fahrenheit:", convertTemperature(0, "F"));
console.log("100°C to Fahrenheit:", convertTemperature(100, "F"));

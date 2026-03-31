function showWeather(){
    let input=document.getElementById("input")
    getWeather(input.value)

}
 async function getWeather(city){
    const url = `https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '5878253ba3msh1ec60553deb6a23p12c861jsn20a5d0abc7a4',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	// console.log(result.main.temp);
    show(result.main.temp)
} catch (error) {
	console.error(error);
}

}
function show(data){
    let container=document.getElementById("container")
    container.innerHTML=`
    <h2>Current Weather : ${data}</h2>
    `
}
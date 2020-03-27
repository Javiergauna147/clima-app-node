const axios = require('axios');



const getClima = async(lat, lng) => {

	let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=bdd0d571a5a81a9be9bc1119949d0a44`)

	return resp.data.main.temp;
}

module.exports = {
	getClima
}
const axios = require('axios');


const getLugarLatLng = (direccion) => {
/*
	let encodedURL = encodeURI(direccion);

	let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedURL }&key=AIzaSyA_j_cfboxPM-8BDMjlB6415JvHE4R1iK8`);

		if (resp.data.status === 'ZERO_RESULTS') {
			throw new Error(`no hay resultados para la ciudad ${direccion}`);
		}
			
			//Esta parte del código esta comentada porque al no tener acceso a la API de google maps decido hardcodear Lat y Long.
			let location = resp.data.results[0];
			let coors = location.geometry.location;
		
			console.log('Direccion', location.formatted_address);
			console.log('lat', coors.lat);
			console.log('long', coors.lng);
	
			console.log(JSON.stringify( resp.data, undefined, 4 ));
*/
		return{
			direccion: direccion,
			lat: '-32.697910',
			lng: '-71.196846'
		}
}
module.exports = {
	getLugarLatLng
}
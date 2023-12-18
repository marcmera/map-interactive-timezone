import axios from 'axios';

const obtenerZonaHoraria = async (codigoPais) => {
    console.log(codigoPais);
    const getTime = async (latitud, longitud) => {
        const responsePais = await axios.get(`http://api.timezonedb.com/v2.1/get-time-zone?key=SBB6G9DRRYOY&format=json&by=position&lat=${latitud}&lng=${longitud}`);
        return responsePais.data.formatted;
    }

    try {
        // Obtener información del país a partir del código de país
        const responsePais = await axios.get(`https://restcountries.com/v3.1/alpha/${codigoPais}`);
        const nombrePais = responsePais.data[0].name.common;
        const region = responsePais.data[0].region;
        const capital = responsePais.data[0].capital;
        const latitud = responsePais.data[0].latlng[0];
        const longitud = responsePais.data[0].latlng[1];
        const tld = responsePais.data[0].tld[0];
        const lang = tld.replace('.', '');
        const zonaHoraria = await getTime(latitud, longitud);
        const data = [nombrePais, region, capital, zonaHoraria, lang];
        // const data = [nombrePais, region, capital, zonaHoraria];
        return data;
    }
    catch (error) {
        throw new Error('Código de país no válido o no se pudo obtener la información.');
    }
}

export default obtenerZonaHoraria;         
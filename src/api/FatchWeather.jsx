import axios from "axios";

let URL = "https://api.openweathermap.org/data/2.5/weather";
let KEY = "10c9febc354435ffc3d32e3a73e7e009";

export const FatchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: KEY,
        }
    });

    return data;
} 
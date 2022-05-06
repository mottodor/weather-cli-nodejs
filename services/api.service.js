import axios from 'axios'
import {getKeyValue, TOKEN_DICT} from "./storage.service.js";

const getWeather = async (city) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather'
    const token = await getKeyValue(TOKEN_DICT.token)

    if (!token) {
        throw new Error('Did not set api-key, set it by using -t [API_KEY]')
    }

    const {data} = await axios.get(url, {
        params: {
            q: city,
            appid: token,
            lang: 'us',
            units: 'metric'
        }
    })

    return data
}

export {getWeather}
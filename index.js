#!/usr/bin/env node

import {getArgs} from "./helpers/args.js";
import {printHelp, printSuccess, printError, printWeather} from './services/log.service..js'
import {getKeyValue, saveKeyValue, TOKEN_DICT} from "./services/storage.service.js";
import {getIcon, getWeather} from "./services/api.service.js";

const saveToken = async (token) => {
    if (!token.length) {
        printError('Token not received')
        return
    }
    try {
        await saveKeyValue(TOKEN_DICT.token, token)
        printSuccess('Token saved')
    } catch (err) {
        printError(err.message)
    }
}

const saveCity = async (city) => {
    if (!city.length) {
        printError('City not received')
        return
    }
    try {
        await saveKeyValue(TOKEN_DICT.city, city)
        printSuccess('City saved')
    } catch (err) {
        printError(err.message)
    }
}

const getForecast = async () => {
    try {
        const city = process.env.CITY ?? await getKeyValue(TOKEN_DICT.city)
        const weather = await getWeather(city)
        const icon = getIcon(weather.weather[0].icon)
        printWeather(weather, icon)
        // console.log(weather)
    } catch (err) {
        if (err?.response?.status === 404) {
            printError('Check typo in city name')
        } else if (err?.response?.status === 401) {
            printError('Invalid token')
        } else {
            printError(err.message)
        }
    }
}

const initCLI = () => {
    const args = getArgs(process.argv)
    if (args['h']) {
        // Output help
        return printHelp()
    }
    if (args['s']) {
        // Save city
        return saveCity(args['s'])
    }
    if (args['t']) {
        // Save token
        return saveToken(args['t'])
    }
    // Output weather
    return getForecast()
}

initCLI()
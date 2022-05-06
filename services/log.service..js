import chalk from 'chalk'
import dedent from 'dedent-js'

const printError = err => {
    console.log(chalk.bgRed(' ERROR ') + ' ' + err)
}

const printSuccess = err => {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + err)
}

const printHelp = () => {
    console.log(
        dedent(`${chalk.bgCyan(' HELP ')}   
        Without args - output weather
        -s [CITY] for city setup
        -h for help 
        -t for save token
        `)
    )
}

const printWeather = (res, icon) => {
    console.log(
        dedent(`${chalk.bgYellow(' WEATHER ')}  Weather in ${res.name} city 
        ${icon} ${res.weather[0].description}
        Temperature: ${res.main.temp} С° Feels like ${res.main.feels_like}
        Humidity: ${res.main.humidity} %
        Wind speed: ${res.wind.speed} m/s   
        `)
    )
}

export {printError, printSuccess, printHelp, printWeather}
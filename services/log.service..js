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

export {printError, printSuccess, printHelp}
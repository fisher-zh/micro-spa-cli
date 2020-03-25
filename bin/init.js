const chalk = require('chalk');
const figlet = require('figlet');

const init = () => {
    console.log(
        chalk.green(
            figlet.textSync('MiCRO SPA CLI', {
                horizontalLayout: 'default',
                verticalLayout: 'default'
            })
        )
    );
}

module.exports = init;

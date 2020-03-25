const inquirer = require('inquirer');

const askQuestions = (questions) => {
    return inquirer.prompt(questions);
};

module.exports = askQuestions;

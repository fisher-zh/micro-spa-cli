#!/usr/bin/env node

const init = require('./init');
const askQuestions = require('./ask-questions');
const createFolder = require('./create-folder');
const downloadFile = require('./download-file');

const run = async () => {
    // show script introduction
    init();
    // ask questions
    let userAnswers = {};
    await askQuestions([{
        name: 'name',
        type: 'input',
        message: 'project name: ',
        default: 'micro-spa'
    }, {
        name: 'type',
        type: 'list',
        message: 'project type: ',
        choices: ['main-app', 'sub-app']
    }]).then(answers => {
        console.log(answers);
        userAnswers = answers;
    }).catch(err => {
        console.log(err);
    });
    // create the folder
    const folderPath = createFolder(userAnswers.name);
    // download template
    const type = userAnswers.type.split('-')[0];
    const gitPath = 'fisher-zh/micro-spa-' + type;
    const localPath = folderPath + '/' + type;
    console.log('downloading...');
    await downloadFile(gitPath, localPath);
    console.log('end');
    // show success message

};

run();
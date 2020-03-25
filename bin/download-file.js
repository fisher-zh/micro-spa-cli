const downloadGitRepo = require('download-git-repo');
const downloadFile = function (gitrepo, path) {
    downloadGitRepo(gitrepo, path, function (err) {
        if (err) {
            console.log('下载失败')
            console.log(err);
        }
    })
}

module.exports = downloadFile;

const downloadGitRepo = require('download-git-repo');
const downloadFile = function (gitrepo, path) {
    return new Promise((resolve, reject) => {
        downloadGitRepo(gitrepo, path, function (err) {
            if (err) {
                console.log('下载失败')
                console.log(err);
                reject(err);
            }
            resolve();
        })
    })
}

module.exports = downloadFile;

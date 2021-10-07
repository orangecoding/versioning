/**
 * This generates a changelog based on the documentation in the transformer worker. Of course, this is just an
 * example. In reality, with more node instances, this must be an external script, running through all workers in all
 * instances an build a global changelog
 *
**/
const glob = require("glob");
const fs = require('fs')

const changelogs = {};

glob("**/worker/*.js", function (er, files) {
    files.forEach(file => {
        const log = require(`./${file}`);
        const changelog = changelogs[log.version] = changelogs[log.version] || {};
        changelog[log.changelog.forApi] = log.changelog.description;
    });

    try {
        fs.writeFileSync('./changelog.txt', generateChangelog());
        console.info('Changelog created...')
    } catch (err) {
        console.error(err)
    }
});

function generateChangelog(){
    let content = '';
    Object.keys(changelogs).forEach(key => {
        const logs = changelogs[key];
        content += `\nVERSION ${key} \n\n`;

        Object.keys(logs).forEach(apiName => {
            content+=`${apiName}\n`;
            logs[apiName].forEach(change => content+=`- ${change}\n`);
            content += '\n';
        });
    });
    return content;
}
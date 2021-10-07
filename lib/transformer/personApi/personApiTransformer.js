const fs = require('fs');
const path = './worker';

//reading all worker from subdirs
const transformer = fs
    .readdirSync('./lib/transformer/personApi/worker')
    .sort()
    .reverse()
    .map((workerPath) => require(`${path}/${workerPath}`));

//and run all necessary transformation
exports.transformGetPerson = ({version, result}) => {
    let transformedResult = {...result};
    transformer.filter(a => a.version >= version)
        .forEach(transformer => transformedResult = transformer.transform({person: transformedResult}));
    return transformedResult;
};
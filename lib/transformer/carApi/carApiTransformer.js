const fs = require('fs');
const path = './worker';

//reading all worker from subdir
const transformer = fs
    .readdirSync('./lib/transformer/carApi/worker')
    .sort()
    .reverse()
    .map((workerPath) => require(`${path}/${workerPath}`));

//and run the necessary transformation
exports.transformGetCar = ({version, result}) => {
    let transformedResult = {...result};
    transformer.filter(a => a.version >= version)
        .forEach(transformer => transformedResult = transformer.transform({car: transformedResult}));

    return transformedResult;
};
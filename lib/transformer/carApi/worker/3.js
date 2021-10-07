exports.version = 3;

exports.changelog = {
    forApi: '/api/getCar',
    description: ['Added wheels attribute']
};

exports.transform = ({car}) => {
    //noop as only attributes have been added
    return car;
};
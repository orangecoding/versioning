exports.version = 2;

exports.changelog = {
    forApi: '/api/getCar',
    description: ['Change build date to be upper case']
};

exports.transform = ({car}) => {
    const transformedCar = {...car};
    transformedCar.BUILDDATE = transformedCar.buildDate;
    delete transformedCar.buildDate;
    return transformedCar;
};
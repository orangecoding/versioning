exports.version = 3;

exports.changelog = {
    forApi: '/api/getPerson',
    description: ['Change first name field to be upper case']
};

exports.transform = ({person}) => {
    let transformedPerson = {...person};
    transformedPerson.firstName = transformedPerson.FIRST_NAME;
    return transformedPerson;
};
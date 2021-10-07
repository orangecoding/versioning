exports.version = 4;

const storage = require('../../../storage/persons');

exports.changelog = {
    forApi: '/api/getPerson',
    description: ['Removed birthday']
};

exports.transform = ({person}) => {
    const birthday = storage.persons[person.id].birthday || 'NOT FOUND';
    let transformedPerson = {...person};
    transformedPerson.birthday = birthday;
    return transformedPerson;
};
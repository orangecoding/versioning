exports.version = 5;

exports.changelog = {
    forApi: '/api/getPerson',
    description: ['Encapsulated name in own property ']
};

exports.transform = ({person}) => {
    let transformedPerson = {...person, ...person.name};
    delete transformedPerson.name;
    return transformedPerson;
};
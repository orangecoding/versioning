exports.version = 2;

exports.changelog = {
    forApi: '/api/getPerson',
    description: ['Added new first name field', 'Added new given name field']
};

exports.transform = ({person}) => {
    //no-op
    return person;
};
/**
 * this is used an example, in reality, this should be a database
 * @type {{'1': {birthday: string, name: {givenName: string, FIRST_NAME: string}, id: string}}}
 */
let persons = {
  1: {
    id: '1',
    name: {
      FIRST_NAME: 'Christian',
      givenName: 'Kellner',
    },
    birthday: '1983-04-21',
  },
};

exports.persons = persons;

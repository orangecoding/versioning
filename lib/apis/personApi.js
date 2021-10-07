const transformer = require('../transformer/personApi/personApiTransformer');

const storage = require('../storage/persons');

exports.getPerson = ({ version }) => {
  return transformer.transformGetPerson({ version, result: storage.persons[1] });
};

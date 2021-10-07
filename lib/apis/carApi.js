const transformer = require('../transformer/carApi/carApiTransformer');

const storage = require('../storage/cars');

exports.getCar = ({ version }) => {
  return transformer.transformGetCar({ version, result: storage.cars[1] });
};

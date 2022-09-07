import Validator from 'fastest-validator';

const validator = (schema, params) => {
  const validator = new Validator();
  const check = validator.compile(schema);
  return check(params)
};

export default validator;

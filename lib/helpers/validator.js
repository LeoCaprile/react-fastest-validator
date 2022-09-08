import Validator from 'fastest-validator';

const validator = (schema, params) => {
  const check = new Validator().compile(schema);
  return check(params)
};

export default validator;

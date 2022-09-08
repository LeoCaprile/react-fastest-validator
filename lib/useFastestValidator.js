import { useState } from 'react';
import validator from './helpers/validator';

/**
 *  fastest-validator hook for validation in react
 *  @param {object} schema The fastest validator schema.
 *  @returns {[object,function]} 
 * Returns an array containing the following:
 * - (validationError) returns fastest validator object, if the validation is correct
 *  will return a empty object, if the validation fails, it will return an object with the error details.
 *  - (validationTrigger) returns a function to trigger the validation.
 */

const useFastestValidator = (schema) => {
  if(schema == undefined || typeof schema !== 'object'){
    throw new Error('Must provide a valid schema, check hook parameters')
  }
  const [validationError, setValidationError] = useState({});
  
  /**
   * 
   * Function that triggers the validation, recommeded to use in an function that is passed to 
   * an onChange atribute, and validate the data see, example at readme.
   * 
   * @param {object} target target from the field event extracted from the onChange event.
   * @param {object} formData object that contains the name of the field as key,
   * and value the content to be validated.
   */

  function validatorTrigger(target, formData) {
    delete validationError[target.name];
    setValidationError(validationError);
    const errors = validator( { [target.name]: schema[target.name] }, formData );
    if (errors.length > 0) {
      const messages = errors
        .map(e => ({ [e.field]: e.message }))
        .reduce((prev, current) => ({ ...prev, ...current }), {});
      setValidationError({ ...validationError, ...messages });
    }
  };

  return [validationError, validatorTrigger];
  
};

export default useFastestValidator;

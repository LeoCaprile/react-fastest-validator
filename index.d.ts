/**
   * 
   * Function that triggers the validation, recommeded to use in an function that is passed to 
   * an onChange atribute, and validate the data see, example at readme.
   * 
   * @param {object} target target from the field event extracted from the onChange event.
   * @param {object} formData object that contains the name of the field as key,
   * and value the content to be validated.
   */
type validationTrigger = (target: object, formData: object) => void
type validationError = object
declare module 'react-fastest-validator' {
    /**
 *  fastest-validator hook for validation in react
 *  @param {object} schema The fastest validator schema.
 *  @returns {[validationError,validationTrigger]} 
 * Returns an array containing the following:
 * - (validationError) returns fastest validator object, if the validation is correct
 *  will return a empty object, if the validation fails, it will return an object with the error details.
 *  - (validationTrigger) returns a function to trigger the validation.
 */

   export default function useFastestValidator(schema :object) : [validationError, validationTrigger]
}




import validator from '../lib/helpers/validator'

describe('Check if validator helper is working', () => {
    it('should return no error on succesful validation', async () => {
        //Arrange
        const schema = { name: { type: "string", min: 0, max: 4 } }
        const value = {name: "hola"}
        //Act
        const validate = validator(schema,value)
        //Assert
        expect(validate).toBe(true)
    })

    it('should return error on unsuccesful validation', async () => {
        //Arrange
        const schema = { name: { type: "string", min: 5, max: 5 } }
        const value = {name: "hola"}

        //Act
        const validate = validator(schema,value)

        //Assert
        
        expect(typeof validate).toBe('object')
    })
})
import * as React from 'react'
import { renderHook, act } from "@testing-library/react"
import useFastestValidator from "../lib/useFastestValidator"

describe('Check if UseFastestValidator hook works correctly', () => {

    const errorToBeThrow = 'Must provide a valid schema, check hook parameters'

    it('hook should return an object without errors when no validation is trigger', async () => {

        //Arrange
        const schema = { name: { type: "string", min: 5, max: 5 } }
        const { result } = renderHook(() => useFastestValidator(schema))

        //Act
        const [validationError, validationTrigger] = result.current

        //Assert
        expect(typeof validationError).toBe('object')
        expect(typeof validationTrigger).toBe('function')

    })

    it('hook should return an object with errors when a validation is trigger and unsuccesful', async () => {

        //Arrange
        const schema = { name: { type: "string", min: 5, max: 5 } }
        const targetMockValue = {name:'name'}
        const formDataMockValue = {name: 'hell'}
        const { result } = renderHook(() => useFastestValidator(schema))

        //Act
        act(()=>result.current[1](targetMockValue, formDataMockValue))
        //Assert
        expect(typeof result.current[0].name).toBe('string')
    })

    it('hook should return an object with errors when a validation is trigger and unsuccesful', async () => {

        //Arrange
        const schema = { name: { type: "string", min: 5, max: 5 } }
        const targetMockValue = {name:'name'}
        const formDataMockValue = {name: 'hello'}
        const { result } = renderHook(() => useFastestValidator(schema))

        //Act
        act(()=>result.current[1](targetMockValue, formDataMockValue))
        //Assert
        expect(typeof result.current[0].name).toBe('undefined')
    })

    it('hook should throw error if there no parameter', async () => {
         expect(()=>useFastestValidator()).toThrow(errorToBeThrow)
    })

    it('hook should throw error if parameter is not an schema', async () => {
        //Arrange
        const notAnSchema = 2
        const StringSchema = 'hello'

        //Assert
        expect(()=>useFastestValidator(notAnSchema)).toThrow(errorToBeThrow)
        expect(()=>useFastestValidator(StringSchema)).toThrow(errorToBeThrow)
    })
})
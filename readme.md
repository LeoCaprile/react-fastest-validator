# react-fastest-validator

⚡ An adaptation for the JS library [fastest-validator](https://www.npmjs.com/package/fastest-validator).
To validate forms or inputs the easiest and fastest way.

## Installation
------
```
npm i react-fastest-validator --save
```
or
```
yarn add react-fastest-validator
```

## Usage
---------
### Validate

The validation is maked by a hook, so in order to validate anything we need to import the hook.
And we use the hook as shows as following.
```javascript
import useFastestValidator from 'react-fastest-validator'

function App() {
  const [form, setForm] = useState({
    name:''
  })

  const formSchemaValidations = { name: { type: "string", min: 3, max: 20 }}

  //Fastest Validator Hook
  const [validationError, validationTrigger] = useFastestValidator(formSchemaValidations)

  const handleOnChange = ({target}) => {

    const formData = { ...form, [target.name]: target.value}

    /*ValidationTrigger 
    target: extracted from event of onChange 
    formData: state object where the key is the name of the input and the value the content to be validated.*/

    validationTrigger(target, formData)
    setForm(formData)

  }

  return (
    <div className="App">
     <input onChange={handleOnChange} type="text" name='name'></input>
     <p>{validationError.name}</p>
    </div>
  )
}
```

to see more information about the usage of fastest-validator [see their docs](https://www.npmjs.com/package/fastest-validator)


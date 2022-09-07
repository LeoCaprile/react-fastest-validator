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
***To use this library you need to have reactJS library installed in your app.***

## Validate

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

to see more information about the usage of fastest-validator please, [see their docs](https://www.npmjs.com/package/fastest-validator)


## Contributions
-----
Please send pull requests improving the usage and fixing bugs, improving documentation and providing better examples, or providing some tests, because these things are important.

## License
-----
react-fastest-validator is available under the MIT license.

## Thanks to
-----
IceBob for making the awesome library that this library is based on!
### Contact of icebob
<br>
<a href="https://github.com/icebob"><img src="https://camo.githubusercontent.com/20326987bc00226b51e448b4fa1421343ff4312d72dd2e389f6d13bb48442d2c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769746875622d696365626f622d677265656e2e737667"></a>

<a href="https://twitter.com/Icebobcsi"><img src="https://camo.githubusercontent.com/66b0eed21089eed19835ca9aa08c9ad0efd9e0fe425addcf1dff999510b76fe1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f747769747465722d496365626f626373692d626c75652e737667"></a>





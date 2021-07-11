
### Environment Variables
```js
// step one install this module
yarn add react-native-dotenv

// step two add this in your babel.config.js
 plugins: [
    'module:react-native-dotenv',
    {
      moduleName: '@dotenv',
      safe: false,
      allowUndefined: false
    }
  ]
 
 // step three add value whatever in your .env file
 API_KEY = 434d3c04fc285d218d740e2a568387e4
 
 // step four use this method for call environment
 import { API_KEY } from '@dotenv'
```
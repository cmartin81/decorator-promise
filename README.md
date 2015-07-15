[![Build Status](https://travis-ci.org/cmartin81/decorator-promise.svg)](https://travis-ci.org/cmartin81/decorator-promise)

# decorator-promise
A ES6 decorator for making methods of a class a promise.

Should also work in frontend code if you use babel with es7.decorators enabled.

## Install
    $ npm install --save decorator-promise
 
## Usage
    // ES2016 style
    import {promise} from 'decorator-promise'

    // CommonJS style
    let promise = require('decorator-promise').promise;
    
    class SuperNiceClass {
        constructor(){
            //some business here.... 
            //some business here....
        }
        @promise
        bar(a) {
            //some business here.... 
            //some business here....
        }
    }
    
    new SuperNiceClass().bar(10)
    .then((result) => /*some business logic here... */ );
    

## Note
You need to run babel with the option 'es7.decorators' enabled.

## License
MIT © Christian Martin

## dependencies
decorator-wrap
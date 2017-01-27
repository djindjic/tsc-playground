// reference link: http://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-function-d-ts.html
// > Note that ES6 modules cannot directly export callable functions.
// > This file should be imported using the CommonJS-style:
// > import x = require('someLibrary');
import func = require('./commonjs-function');
console.log(func());

import { func1, func2 } from './commonjs-functions-lib';
console.log(func1(), func2());

import { mylib } from './commonjs-object';
console.log(mylib.func1(), mylib.func2());

import { objectUseMoment } from './commonjs-object-use-external';
console.log(objectUseMoment.currentDate().format('hh:mm'));
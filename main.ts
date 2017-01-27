import { func1, func2 } from './commonjs-functions-lib';
import { mylib } from './commonjs-object';
import * as func from './commonjs-function';

console.log(func1(), func2());
console.log(mylib.func1(), mylib.func2());
console.log(func());
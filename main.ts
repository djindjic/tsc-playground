import { func1, func2 } from './commonjs-functions-lib';
import { mylib } from './commonjs-object';

console.log(func1(), func2());
console.log(mylib.func1(), mylib.func2());
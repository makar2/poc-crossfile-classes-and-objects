import { obj, updateObj } from '@/for-import/object';
import second from '@/second';

/**
 * Object
 */

// Initial Values
console.info('\n>>> OBJ initial values:');
console.info('\tapp.ts: ', obj.someValue);
console.info('\tsecond.ts: ', second());

// Updated values Values
updateObj('Functional Programming Rules!!!');
console.info('\n>>> OBJ updated values:');
console.info('\tapp.ts: ', obj.someValue);
console.info('\tsecond.ts: ', second());

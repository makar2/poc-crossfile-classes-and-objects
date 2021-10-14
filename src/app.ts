import { obj, updateObj } from '@/for-import/object';
import { Cl, InitInCl } from '@/for-import/Cl';
import { appInitClassInSecond, objInSecond, selfInitClassInSecond } from '@/second';

export const InitInApp = new Cl('App-initiated value');

/**
 * Object
 */

// Initial Values
console.info('\n>>> Object\'s initial values:');
console.info('\tapp.ts: ', obj.someValue);
console.info('\tsecond.ts: ', objInSecond());

// Updated values
updateObj('New value');
console.info('\n>>> Object\'s updated values:');
console.info('\tapp.ts: ', obj.someValue);
console.info('\tsecond.ts: ', objInSecond()); // Interestingly, the second file preserves value changes to obj made 3 lines above

/**
 * Class
 */

// Initiated in app.ts
console.info('\n>>> Class values initiated in app.ts:');
console.info('\tapp.ts: ', InitInApp.someValue);
console.info('\tsecond.ts: ', appInitClassInSecond());

// Initiated in Cl.ts
console.info('\n>>> Class values initiated in Cl.ts:');
console.info('\tapp.ts: ', InitInCl.someValue);
console.info('\tsecond.ts: ', selfInitClassInSecond());

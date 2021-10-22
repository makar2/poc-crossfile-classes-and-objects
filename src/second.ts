import { variable } from '@/for-import/object';
import { InitInCl } from '@/for-import/Cl';
import { InitInApp } from '@/app';

export const objInSecond = () => variable;
export const appInitClassInSecond = () => InitInApp.someValue;
export const selfInitClassInSecond = () => InitInCl.someValue;

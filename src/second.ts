import { obj } from '@/for-import/object';
import { InitInCl } from '@/for-import/Cl'
import { InitInApp } from '@/app';

export const objInSecond = () => obj.someValue;
export const appInitClassInSecond = () => InitInApp.someValue;
export const selfInitClassInSecond = () => InitInCl.someValue;

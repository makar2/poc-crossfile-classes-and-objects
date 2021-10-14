import { Obj } from '@/interfaces';

export const obj: Obj = {
  someValue: 'Initial value',
};

export const initObj = (newValue: string) => obj.someValue = newValue;

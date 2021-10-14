import { Obj } from '@/interfaces';

export const obj: Obj = {
  someValue: 'Initial value',
};

export const updateObj = (newValue: string) => obj.someValue = newValue;

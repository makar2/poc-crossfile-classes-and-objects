import { Obj } from '@/interfaces';

export const obj: Obj = {
  someValue: null,
};

export const updateObj = (newValue: string) => obj.someValue = newValue;

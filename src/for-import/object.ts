import { Obj } from '@/interfaces';

// eslint-disable-next-line import/no-mutable-exports
export let variable = 'Initial value';

export const obj: Obj = {
  someValue: variable,
};

export const updateObj = (newValue: string) => variable = newValue;

export class Cl {
  constructor(newValue: string) {
    this.someValue = newValue;
    console.info('<<< initiated with: ', this.someValue);
  }

  someValue = 'Initial value'
}

export const InitInCl = new Cl('Self-initiated value');

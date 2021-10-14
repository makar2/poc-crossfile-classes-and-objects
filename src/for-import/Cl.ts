export class Cl {
  constructor(newValue: string) {
    this.someValue = newValue;
  }

  someValue = 'Initial value'
}

export const InitInCl = new Cl('Self-initiated value');

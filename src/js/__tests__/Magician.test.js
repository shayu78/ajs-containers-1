/* eslint-disable no-console */

import Magician from '../Magician';

test('class Magician - throw (wrong name)', () => {
  expect(() => {
    const magician = new Magician(10);
    console.log(magician);
  }).toThrowError(Error);
});

test('class Magician - throw (no name)', () => {
  expect(() => {
    const magician = new Magician();
    console.log(magician);
  }).toThrowError(Error);
});

test('class Magician instanceof', () => {
  expect(new Magician('Name')).toBeInstanceOf(Magician);
});

test('class Magician', () => {
  expect(new Magician('Name')).toEqual(
    {
      name: 'Name',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  );
});

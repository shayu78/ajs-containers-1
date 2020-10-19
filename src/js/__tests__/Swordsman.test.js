/* eslint-disable no-console */

import Swordsman from '../Swordsman';

test('class Swordsman - throw (wrong name)', () => {
  expect(() => {
    const swordsman = new Swordsman(10);
    console.log(swordsman);
  }).toThrowError(Error);
});

test('class Swordsman - throw (no name)', () => {
  expect(() => {
    const swordsman = new Swordsman();
    console.log(swordsman);
  }).toThrowError(Error);
});

test('class Swordsman instanceof', () => {
  expect(new Swordsman('Name')).toBeInstanceOf(Swordsman);
});

test('class Swordsman', () => {
  expect(new Swordsman('Name')).toEqual(
    {
      name: 'Name',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  );
});

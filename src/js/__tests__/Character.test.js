/* eslint-disable no-console */

import Character from '../Character';

test('class Character - throw (wrong name)', () => {
  expect(() => {
    const character = new Character(10, 'Bowman');
    console.log(character);
  }).toThrowError(Error);
});

test('class Character - throw (no name)', () => {
  expect(() => {
    const character = new Character();
    console.log(character);
  }).toThrowError(Error);
});

test('class Character - throw (wrong type)', () => {
  expect(() => {
    const character = new Character('Name', 'Bowman2');
    console.log(character);
  }).toThrowError(Error);
});

test('class Character - throw (no type)', () => {
  expect(() => {
    const character = new Character('Name');
    console.log(character);
  }).toThrowError(Error);
});

test('class Character instanceof', () => {
  expect(new Character('Name', 'Bowman')).toBeInstanceOf(Character);
});

test('class Character', () => {
  expect(new Character('Name', 'Bowman')).toEqual(
    {
      name: 'Name',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 0,
      defence: 0,
    },
  );
});

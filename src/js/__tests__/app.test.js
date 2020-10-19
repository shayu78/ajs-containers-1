import Team from '../app';
import Magician from '../Magician';
import Swordsman from '../Swordsman';

test('class Team instanceof', () => {
  expect(new Team()).toBeInstanceOf(Team);
});

describe('Team methods', () => {
  const team = new Team();
  test('Team toArray (empty)', () => {
    const array = team.toArray();
    expect(array).toEqual(expect.arrayContaining([]));
  });

  const magician = new Magician('magician');
  const swordsman = new Swordsman('swordsman');

  test('Team add Swordsman', () => {
    team.add(swordsman);
    expect(team.members).toContainEqual(
      {
        name: 'swordsman',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
      },
    );
  });

  test('Team addAll', () => {
    team.addAll(swordsman, magician);
    expect(Array.from(team.members)).toEqual(expect.arrayContaining([
      {
        name: 'swordsman',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'magician',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
      },
    ]));
  });

  test('Team addAll with incorrect elements', () => {
    team.addAll(10, swordsman, magician, '111', true);
    expect(Array.from(team.members)).toEqual(expect.arrayContaining([
      {
        name: 'swordsman',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'magician',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
      },
    ]));
  });

  test('Team addAll no elements', () => {
    team.addAll();
    expect(Array.from(team.members)).toEqual(expect.arrayContaining([
      {
        name: 'swordsman',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'magician',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
      },
    ]));
  });

  test('Team toArray', () => {
    const array = team.toArray();
    expect(array).toEqual(expect.arrayContaining([
      {
        name: 'magician',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
      },
      {
        name: 'swordsman',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
      },
    ]));
  });

  test('Team add value - throw (no value)', () => {
    expect(() => {
      team.add();
    }).toThrowError(Error);
  });

  test('Team add value - throw (incorrect type)', () => {
    expect(() => {
      team.add(10);
    }).toThrowError(Error);
  });

  test('Team add value - throw (object already exist)', () => {
    expect(() => {
      team.add(magician);
    }).toThrowError(Error);
  });
});

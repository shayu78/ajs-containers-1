/* eslint-disable no-console */

import Swordsman from './Swordsman';
import Magician from './Magician';
import Character from './Character';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (character && character instanceof Character) {
      if (this.members.has(character)) throw new Error('Персонаж уже добавлен ранее');
      this.members.add(character);
    } else throw new Error('Невозможно добавить объект данного типа или объект отсутствует');
  }

  addAll(...characters) {
    characters.forEach((value) => {
      if (value instanceof Character) this.members.add(value);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}

try {
  const team = new Team();
  const swordsman = new Swordsman('swordsman');
  team.add(swordsman);
  const swordsman2 = new Swordsman('swordsman2');
  const swordsman3 = new Swordsman('swordsman3');
  const magician = new Magician('magician');
  team.addAll(swordsman2, true, magician, swordsman3, swordsman);
  console.log(team.members);
  console.log(team.toArray());
  team.add(swordsman2);
} catch (error) {
  console.error(error.message);
}

import Person from './Person';

class Team {
  constructor(persons) {
    this.persons = persons;
  }

  [Symbol.iterator]() {
    let current = 0;
    const { length } = this.persons;
    return {
      next() {
        if (current < length) {
          current += 1;
          return {
            done: false,
            value: this.persons[current],
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}

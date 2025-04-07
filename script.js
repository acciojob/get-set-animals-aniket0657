
class Animal {
    constructor(species) {
      this.species = species;
    }

    get species() {
      return this._species;
    }

    set species(value) {
      this._species = value;
    }

    makeSound() {
      console.log(The ${this.species} makes a sound);
    }
  }

  class Cat extends Animal {
    constructor(species) {
      super(species);
    }

    purr() {
      console.log('purr');
    }
  }

  class Dog extends Animal {
    constructor(species) {
      super(species);
    }

    bark() {
      console.log('woof');
    }
  }
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
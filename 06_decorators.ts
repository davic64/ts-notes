// Decorators
// Decorators are simple functions

class NewComputer {
  constructor(public readonly id: number, public model: string) {}
  printModel() {
    console.log("NOP");
  }
}

const MyDecorator = () => {
  return (target: Function) => {
    return NewComputer; // Here what it does is to call the class with the decorator we are overwriting the class with the new class
  };
};

@MyDecorator() // By defining the decorator, you get access to the class
class Computer {
  constructor(public readonly id: number, public model: string) {}
  printModel() {
    console.log(this.model);
  }
}

const macbook = new Computer(1, "Macbook Air");

macbook.printModel();

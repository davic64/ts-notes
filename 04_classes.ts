// Classes
// A class serves as a template
class Computer {
  public id: number; // This is a property
  public model: string;

  // Method executed when an instance of the class is created
  constructor(id: number, model: string) {
    this.id = id;
    this.model = model;
    console.log("Constructor called");
  }
}

const macbook = new Computer(1, "Macbook Air");

// There is a shorter way for classes
class ShortComputer {
  // Getter
  get imageURL(): string {
    // When using the getter in an instance, it is used in the normal way as if it were a property
    return `https://example.com/${this.id}.jpg`; // Within classes "this" points to the instance that was created
  }

  constructor(
    public readonly id: number, // Readonly makes it impossible to change the field later on
    public model: string
  ) {}

  // A method is a function that is inside the class and being inside the class also has access to each of its properties
  public scream() {
    // Since it is “public” it can be used inside and outside the class
    console.log(`${this.model.toUpperCase()}!!!`);
    this.computerId();
  }

  private computerId() {
    // As it is “private” it can only be used within the class
    console.log(this.id);
  }

  // An asynchronous method is a method that is performed out of time, it is a method that returns a promise
  async sales() {
    const sales = await fetch("https://example.com/api");
    console.log(sales);
  }
}

const macbookTwo = new ShortComputer(1, "Macbook Air");

// macbookTwo.id = 4; // ❌ Cannot assign to 'id' because it is a read-only property

macbookTwo.scream();
// macbookTwo.computerId(); // ❌ Because is private

// console.log(macbookTwo.sales());
macbookTwo.sales();

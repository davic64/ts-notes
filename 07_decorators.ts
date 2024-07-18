const Deprecated = (deprecationReason: string) => {
  return (
    target: any,
    memberName: string,
    propertyDescriptor: PropertyDescriptor
  ) => {
    return {
      get() {
        const wrapperFn = (...args: any[]) => {
          console.warn(
            `Method ${memberName} is deprecated with reason: ${deprecationReason}`
          );
          //! Call the function itself with its arguments
          propertyDescriptor.value.apply(this, args);
        };
        return wrapperFn;
      },
    };
  };
};

class Computer {
  constructor(public readonly id: number, public model: string) {}
  printModel() {
    console.log(this.model);
  }

  @Deprecated("Most use printId2 method instead")
  printId() {
    console.log(this.id);
  }

  printId2() {
    console.log(`ID: ${this.id}`);
  }
}

const macbook = new Computer(1, "Macbook Air");

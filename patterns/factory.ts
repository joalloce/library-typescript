class Thing {
  public name: string;
  public year: number;

  public constructor(...params: Array<any>) {
    this.name = params[0];
    this.year = params[1];
  }
}

class Smartphone extends Thing {
  public phoneNumber: string;

  public constructor(...params: Array<any>) {
    super(params[0], params[1]);
    this.phoneNumber = params[2];
  }

}

class Laptop extends Thing {
  public numUSBports: number;

  public constructor(...params: Array<any>) {
    super(params[0], params[1]);
    this.numUSBports = params[2];
  }
}

class ThingFactory {
  static createThing(type: string, ...rest: Array<any>): Thing {
    switch(type) {
      case 'smartphone':
        return new Smartphone(...rest);
      case 'laptop':
        return new Laptop(...rest);
      default:
        return new Thing(...rest);
    }
  }
}

export {Thing, Smartphone, Laptop, ThingFactory};
class Coffee {
  cost(): number {
    return 5;
  }
}

abstract class CoffeeDecorator extends Coffee {
  protected coffee: Coffee;
  constructor(coffee: Coffee) {
    super();
    this.coffee = coffee;
  }

  abstract cost(): number;
}

class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 2;
  }
}

class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 1;
  }
}

export { Coffee, MilkDecorator, SugarDecorator };

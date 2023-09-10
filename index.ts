import {
  Singleton,
  Laptop,
  Smartphone,
  Thing,
  ThingFactory,
  Product,
  ProductBuilder,
  Home,
  WashCycle,
  RinseCycle,
  SpinCycle,
  IdleState,
  WashingMachine,
  Coffee,
  MilkDecorator,
  SugarDecorator,
} from "./patterns";

console.log("----Patterns-------------------------");
console.log("Singleton");
const instance = Singleton.getInstance();
console.log(instance instanceof Singleton);
console.log(instance.name);

console.log("Factory");
const iphone = ThingFactory.createThing("smartphone", 2020, "1237-4357");
console.log(iphone instanceof Laptop);
console.log(iphone instanceof Smartphone);
console.log(iphone instanceof Thing);

console.log("Builder");
const builder = new ProductBuilder();
builder.setName("Laptop").setModel("LG gram 17").setPrice(1500);
const product = builder.getProduct();
console.log(product.name);
console.log(product.model);
console.log(product.price);
console.log(product instanceof Product);

console.log("Facade");
const home = new Home();
home.turnOn();
home.shutDown();
home.mute();

console.log("State");
const washingMachine = new WashingMachine();
console.log(washingMachine.status());
washingMachine.changeState(new WashCycle());
console.log(washingMachine.status());

console.log("Decorator");
const coffee = new Coffee();
console.log(coffee.cost());
const coffeeWithMilk = new MilkDecorator(coffee);
console.log(coffeeWithMilk.cost());
const coffeeWithMilkAndSugar = new SugarDecorator(coffeeWithMilk);
console.log(coffeeWithMilkAndSugar.cost());

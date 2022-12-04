class Product {
  name: string;
  model: string;
  price: number;

  constructor() {
    this.name = "";
    this.model = "";
    this.price = 0;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setModel(model: string) {
    this.model = model;
  }

  public setPrice(price: number) {
    this.price = price;
  }
}

class ProductBuilder {
  product: Product;

  constructor() {
    this.product = new Product();
  }

  public setName(name: string): ProductBuilder {
    this.product.setName(name);
    return this;
  }

  public setModel(model: string): ProductBuilder {
    this.product.setModel(model);
    return this;
  }

  public setPrice(price: number): ProductBuilder {
    this.product.setPrice(price);
    return this;
  }

  public getProduct(): Product {
    return this.product;
  }
}

export { Product, ProductBuilder };

class Singleton {
  static instance: Singleton;
  public name: string = "myname"

  private constructor(){}

  static getInstance(): Singleton {
    if(!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

export default Singleton
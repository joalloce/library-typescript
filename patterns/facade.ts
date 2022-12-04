class MusicSystem {
  public turnOn() {
    console.log("Music system turned on");
  }
  public turnOff() {
    console.log("Music system turned off");
  }
  public pause() {
    console.log("Music system paused");
  }
}

class TVSystem {
  public turnOn() {
    console.log("TV system turned on");
  }
  public turnOff() {
    console.log("TV system turned off");
  }
  public mute() {
    console.log("TV system muted");
  }
}

class Home {
  private musicSystem = new MusicSystem();
  private TVSystem = new TVSystem();

  public turnOn() {
    this.musicSystem.turnOn();
    this.TVSystem.turnOn();
  }
  public shutDown() {
    this.musicSystem.turnOff();
    this.TVSystem.turnOff();
  }
  public mute() {
    this.TVSystem.mute();
    this.musicSystem.pause();
  }
}

export default Home;

interface State {
  status(): string;
}

class WashCycle implements State {
  status(): string {
    return "Washing";
  }
}
class RinseCycle implements State {
  status(): string {
    return "Rinsing";
  }
}
class SpinCycle implements State {
  status(): string {
    return "Spinning the basket";
  }
}
class IdleState implements State {
  status(): string {
    return "Idle";
  }
}

class WashingMachine {
  private state: State;

  constructor() {
    this.state = new IdleState();
  }

  changeState(state: State) {
    this.state = state;
  }

  status() {
    return this.state.status();
  }
}

export { WashCycle, RinseCycle, SpinCycle, IdleState, WashingMachine };

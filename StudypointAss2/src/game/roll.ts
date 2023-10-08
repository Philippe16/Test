export default class Roll {
    private pins: number;
  
    constructor(pins: number) {
      this.pins = pins;
    }
  
    getPins(): number {
      return this.pins;
    }
  }
  
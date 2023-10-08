import Roll from './roll';

export default class Frame {
    public rolls: Roll[] = [];

  addRoll(roll: Roll): void {
    this.rolls.push(roll);
  }

  isStrike(): boolean {
    return this.rolls.length === 1 && this.rolls[0].getPins() === 10;
  }

  isSpare(): boolean {
    return this.rolls.length === 2 && this.calculateScore() === 10;
  }

  calculateScore(): number {
    return this.rolls.reduce((total, roll) => total + roll.getPins(), 0);
  }
}

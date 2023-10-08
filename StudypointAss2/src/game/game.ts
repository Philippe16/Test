import Roll from './roll';
import Frame from './frame';

export class Game {
  private rolls: Roll[] = [];
  private frames: Frame[] = [];

  roll(pins: number): void {
    const roll = new Roll(pins);
    this.rolls.push(roll);

    let currentFrame = this.getCurrentFrame();
    if (!currentFrame || currentFrame.isSpare() || currentFrame.isStrike()) {
      currentFrame = new Frame();
      this.frames.push(currentFrame);
    }

    currentFrame.addRoll(roll);

    if (this.frames.length === 10) {
      const tenthFrame = this.frames[9];
      if (tenthFrame.isStrike() || tenthFrame.isSpare()) {
        if (tenthFrame.isStrike() && tenthFrame.rolls.length === 3) {
          return;
        }
        if (tenthFrame.isSpare() && tenthFrame.rolls.length === 2) {
          return;
        }
      }
    }
  }

  private getCurrentFrame(): Frame | undefined {
    return this.frames.length > 0 ? this.frames[this.frames.length - 1] : undefined;
  }

  calculateScore(): number {
    let totalScore = 0;
  
    for (let frameIndex = 0; frameIndex < this.frames.length; frameIndex++) {
      const frame = this.frames[frameIndex];
      totalScore += frame.calculateScore();
  
      if (frame.isStrike() && frameIndex < 9) {
        totalScore += this.strikeBonus(frameIndex);
      } else if (frame.isSpare() && frameIndex < 9) {
        totalScore += this.spareBonus(frameIndex);
      }
    }
  
    return totalScore;
  }
  

  private strikeBonus(frameIndex: number): number {
    const nextFrame = this.frames[frameIndex + 1];
    if (nextFrame) {
      if (nextFrame.isStrike() && frameIndex < 9) {
        const nextNextFrame = this.frames[frameIndex + 2];
        if (nextNextFrame) {
          return nextFrame.calculateScore() + nextNextFrame.rolls[0].getPins();
        }
      } else {
        return nextFrame.calculateScore();
      }
    }
    return 0;
  }

  private spareBonus(frameIndex: number): number {
    const nextFrame = this.frames[frameIndex + 1];
    if (nextFrame) {
      return nextFrame.rolls[0].getPins();
    }
    return 0;
  }
}

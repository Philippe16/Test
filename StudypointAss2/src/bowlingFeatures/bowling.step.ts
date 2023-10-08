import { defineFeature, loadFeature } from 'jest-cucumber';
import { Game } from '../game/game'; 

const feature = loadFeature('./src/bowlingFeatures/bowling.feature');


defineFeature(feature, (test) => {
  let game: Game;

  // Scenario: Rolling a gutter game
  test('Rolling a gutter game', ({ given, when, then }) => {
    given('a new bowling game', () => {
      game = new Game();
    });

    when(/^I roll (\d+) pins (\d+) times$/, () => {
      for (let i = 0; i < 20; i++) {
        game.roll(0);
      }
    });

    then('my total score should be 0', () => {
      expect(game.calculateScore()).toBe(0);
    });
  });

  // Scenario: Rolling all ones
  test('Rolling all ones', ({ given, when, then }) => {
    given('a new bowling game', () => {
      game = new Game();
    });

    when('I roll 1 pin 20 times', () => {
      for (let i = 0; i < 20; i++) {
        game.roll(1);
      }
    });

    then('my total score should be 20', () => {
      expect(game.calculateScore()).toBe(20);
    });
  });

    // Scenario: Rolling one spare
    test('Rolling one spare', ({ given, when, then }) => {
        given('a new bowling game', () => {
          game = new Game();
        });
    
        when(/^I roll (\d+) pins (\d+) times$/, () => {
          game.roll(5);
          game.roll(5); // Spare
        });
    
        when(/^I roll (\d+) pins (\d+) times$/, () => {
          for (let i = 0; i < 18; i++) {
            game.roll(3);
          }
        });
    
        then(/^my total score should be (\d+)$/, () => {
          expect(game.calculateScore()).toBe(67);
      });
    });

    // Scenario: Rolling one strike
    test('Rolling one strike', ({ given, when, then }) => {
        given('a new bowling game', () => {
          game = new Game();
        });
    
        when(/^I roll (\d+) pins (\d+) time$/, () => {
          game.roll(10);
        });
    
        then('my total score should be 10', () => {
          expect(game.calculateScore()).toBe(10);
      });
    });

    // Scenario: Rolling a perfect game
    test('Rolling a perfect game', ({ given, when, then }) => {
        given('a new bowling game', () => {
          game = new Game();
        });
      
        when(/^I roll (\d+) pins (\d+) times$/, (pins, times) => {
          for (let i = 0; i < parseInt(times); i++) {
            game.roll(parseInt(pins));
          }
        });
      
        then('my total score should be 300', () => {
          expect(game.calculateScore()).toBe(300);
      });
    });

});
let bulls, cows, number, userInput;

function checkGuess() {
  for (let i = 0; i < 6; ++i) {
    if (number[i] === userInput[i]) {
      ++bulls;
    } else if (number.includes(userInput[i])) {
      ++cows;
    }
  }
}

function newGame() {
  bulls = 0;
  cows = 0;
  number = '123456';
  userInput = '';
}

describe('checkGuess', () => {
  beforeEach(() => {
    newGame();
  });

  it('should display correct number of bulls and cows', () => {
    userInput = '654321';
    checkGuess();
    expect(bulls).toBe(0);
    expect(cows).toBe(6);
  });

  it('should handle correct guess', () => {
    userInput = '123456';
    checkGuess();
    expect(bulls).toBe(6);
    expect(cows).toBe(0);
  });
});

describe('newGame', () => {
  it('should reset data on new game', () => {
    newGame();
    expect(bulls).toBe(0);
    expect(cows).toBe(0);
    expect(number).toBe('123456');
    expect(userInput).toBe('');
  });
});

describe('app e2e tests', () => {
  beforeEach(() => {
    cy.visit('127.0.0.1:3000');
  });

  it('should pass with correct number entered', () => {
    cy.get('#hidden').then((el) => {
      cy.get('#userInput').type(el[0].value);
    });

    cy.get('#check').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Поздравляем. Вы отгадали число');
    });
  });

  it('should display an error when pattern is mismatched', () => {
    cy.get('#userInput').type('qwerty');
    cy.get('#check').click();
    cy.focused().then((el) => {
      expect(el[0].validationMessage).to.equal(
        'Пожалуйста, используйте требуемый формат.'
      );
    });
  });

  it('should display correct amounts of bulls and cows', () => {
    let testInputNumber = '123456';
    let bulls, cows, correctNumber;
    cy.get('#bulls').then((el) => {
      bulls = +el[0].textContent;
    });
    cy.get('#cows').then((el) => {
      cows = +el[0].textContent;
    });

    cy.get('#hidden').then((el) => {
      correctNumber = el[0].value;
      cy.get('#userInput').type(testInputNumber);
      for (let i = 0; i < 6; ++i) {
        if (correctNumber[i] === testInputNumber[i]) {
          ++bulls;
        } else if (correctNumber.includes(testInputNumber[i])) {
          ++cows;
        }
      }
      cy.get('#check').click();

      cy.get('#bulls').then((el) => {
        expect(el[0].textContent).to.equal(bulls.toString());
      });

      cy.get('#cows').then((el) => {
        expect(el[0].textContent).to.equal(cows.toString());
      });
    });
  });
});

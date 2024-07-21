

describe('Rock Paper Scissors Game', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000'); // Adjust the URL if your app is running on a different port
  });

  it('types a name, selects a choice, and confirms the history log', () => {
    // Type the username
    cy.get('#username').type('Test User');

    // Start the game
    cy.get('#start-game-button').click();

    // Select a choice from the dropdown
    cy.get('#user-selection').select('rock');

    // Click the Go button
    cy.get('#go-button').click();

    // Check the history log
    cy.get('#game-history').should('contain', 'Test User');
    cy.get('#game-history').children().should('have.length', 1);
  });
});
//tes
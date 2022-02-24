const { cyan } = require("colorette");

// Desecribe block for our suite of tests
describe("Calculator positive tests", () => {
  it("should check 7 + 9 equals 16", () => {
    // Write our test case in here
    // 1. Arrange
    cy.visit("localhost:5502/index.html")

    // 2. Act
    cy.get('.buttons__seven').click();
    cy.get('.buttons__plus').click();
    cy.get('.buttons__nine').click();
    cy.get('#equals').click();

    // 3. Assert
    cy.get('#final-result').should("contain", "16");
    cy.get('#current-input').should("contain", "");

  });

  it("should check 7 - 9 equals -2", () => {
    // Write our test case in here
    // 1. Arrange
    cy.visit("localhost:5502/index.html")

    // 2. Act
    cy.get('.buttons__seven').click();
    cy.get('.buttons__minus').click();
    cy.get('.buttons__nine').click();
    cy.get('#equals').click();

    // 3. Assert
    cy.get('#final-result').should("contain", "-2");
    cy.get('#current-input').should("contain", "");

  });

  it("should check 7 x 9 equals 63", () => {
    // Write our test case in here
    // 1. Arrange
    cy.visit("localhost:5502/index.html")

    // 2. Act
    cy.get('.buttons__seven').click();
    cy.get('.buttons__multiply').click();
    cy.get('.buttons__nine').click();
    cy.get('#equals').click();

    // 3. Assert
    cy.get('#final-result').should("contain", "63");
    cy.get('#current-input').should("contain", "");

  });

  it("should check 9 divided by 6 equals 1.5", () => {
    // Write our test case in here
    // 1. Arrange
    cy.visit("localhost:5502/index.html")

    // 2. Act
    cy.get('.buttons__nine').click();
    cy.get('.buttons__divide').click();
    cy.get('.buttons__six').click();
    cy.get('#equals').click();

    // 3. Assert
    cy.get('#final-result').should("contain", "1.5");
    cy.get('#current-input').should("contain", "");

  });
});

describe("Calculator negative tests", () => {
  it("should check two operators aren't added to the display", () => {
    // Write our test case in here
    // 1. Arrange
    cy.visit("localhost:5502/index.html")

    // 2. Act
    cy.get('.buttons__multiply').click();
    cy.get('.buttons__multiply').click();

    // 3. Assert
    cy.get('#final-result').should("contain", "");
    cy.get('#current-input').should("contain", "");

  });

  it("clicking operator twice still calculates sum", () => {
    // Write our test case in here
    // 1. Arrange
    cy.visit("localhost:5502/index.html")

    // 2. Act
    cy.get('.buttons__seven').click();
    cy.get('.buttons__multiply').click();
    cy.get('.buttons__multiply').click();
    cy.get('.buttons__nine').click();
    cy.get('#equals').click();

    // 3. Assert
    cy.get('#final-result').should("contain", "63");
    cy.get('#current-input').should("contain", "");

  });

  it("clicking different operator overwrites the first", () => {
    // Write our test case in here
    // 1. Arrange
    cy.visit("localhost:5502/index.html")

    // 2. Act
    cy.get('.buttons__seven').click();
    cy.get('.buttons__divide').click();
    cy.get('.buttons__multiply').click();
    cy.get('.buttons__nine').click();
    cy.get('#equals').click();

    // 3. Assert
    cy.get('#final-result').should("contain", "63");
    cy.get('#current-input').should("contain", "");

  });

  it("Can't input more than one decimal", () => {
    // Write our test case in here
    // 1. Arrange
    cy.visit("localhost:5502/index.html")

    // 2. Act
    cy.get('.buttons__seven').click();
    cy.wait(10);
    cy.get('#point').click();
    cy.wait(10);
    cy.get('#point').click();
    cy.wait(10);
    cy.get('.buttons__nine').click();

    // 3. Assert
    cy.get('#final-result').should("contain", "");
    cy.get('#current-input').should("not.have.value", "7..9");
    cy.get('#current-input').should("contain", "7.9");

  });

});
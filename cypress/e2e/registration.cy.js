describe('', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/registration');
  });
  it('Fill the form and submit', () => {
    cy.get('[formControlName="email"]').type('srimathi@twilightsoftwares.com');
    cy.get('[formControlName="firstName"]').type('Srimathi');
    cy.get('[formControlName="lastName"]').type('Murugadoss');
    cy.get('[formControlName="password"]').type('Srimathi@1');
    cy.get('[formControlName="confirmPassword"]').type('Srimathi@1');
    cy.get('[id="submit-btn"]').click();
    cy.contains('Form submitted successfully').should('exist');
  });

  // it('should display error messages for invalid inputs', () => {
  //   cy.timeout(1000000);
  //   cy.contains('FirstName is required.').should('exist');
  //   cy.contains('Email is required.').should('exist');
  //   cy.contains('LastName is required.').should('exist');
  //   cy.contains('Password is required.').should('exist');
  //   cy.contains('ConfirmPassword is required.').should('exist');
  //   cy.get('[id="submit-btn"]').click();
  // });
});
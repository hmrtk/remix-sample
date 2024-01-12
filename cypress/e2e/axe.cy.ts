
beforeEach(() => {
  cy.visit('http://localhost:3000')
  cy.injectAxe({ axeCorePath: 'node_modules/axe-core/axe.min.js'})
})

describe('My Page', () => {
  it('should have no accessibility violations', () => {
    cy.checkA11y();
  });
});
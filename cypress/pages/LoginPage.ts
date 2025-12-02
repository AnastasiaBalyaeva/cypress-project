/// <reference types="cypress" />

export default new class LoginPage {

  clickHomeLoginButton() {
    cy.get('button[data-testid="home-login-button"]').should('be.visible').click({ force: true })
  }
  verifyNavMenu() {
    cy.get('nav[data-testid="nav-menu"]').should('be.visible')
  }
  
}

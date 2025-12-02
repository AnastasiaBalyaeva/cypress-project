/// <reference types="cypress" />

import LoginPage from "../pages/LoginPage"

describe('theme', () => {
  beforeEach(() => { 
    cy.visit(Cypress.env('baseUrl'))
    cy.wait(2000)
  });

  it('Change theme', () => {
    LoginPage.clickHomeLoginButton()
    cy.successlogin()
    cy.themechange()
  })
})


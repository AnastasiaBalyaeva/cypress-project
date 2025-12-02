/// <reference types="cypress" />

import LoginPage from "cypress/pages/LoginPage"
import { defineConfig } from 'cypress'

describe('login', () => {
  beforeEach(() => { 
    cy.visit(Cypress.env('baseUrl'))
    cy.wait(2000)
  });

  it('Success login', () => {
    
    LoginPage.clickHomeLoginButton()
    cy.successlogin()
    cy.wait(2000)
    LoginPage.verifyNavMenu()
  })
})


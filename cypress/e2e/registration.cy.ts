/// <reference types="cypress" />

import RegistrationPage from "../pages/RegistrationPage"
import { defineConfig } from 'cypress'

describe('registration', () => {
  beforeEach(() => { 
    cy.visit(Cypress.env('baseUrl'))
    cy.wait(2000)
  })

  it('Load the Homepage, validate logo and buttons Prihlaseni and Registrace', () => {
    cy.wait(500)
    RegistrationPage.checkLogoIsVisible()
    RegistrationPage.checkLoginButton()
    RegistrationPage.checkRegistrationButton()
  })

  it('Click on button "Registrace", input invalid IČO, validate notification', () => {
    RegistrationPage.visit()
    RegistrationPage.clickIcoInput()
    RegistrationPage.clickOutsideOfTheForm()
    RegistrationPage.checkIcoRequiredError()
    RegistrationPage.inputIncorrectIco()
    RegistrationPage.clickOutsideOfTheForm()
    cy.wait(1000)
    RegistrationPage.clickVerifyButton()
    RegistrationPage.validateIcoNotFoundError()
  })
  
  it.only('Click on button "Registrace", input valid IČO, complete the registration process', () => {
    RegistrationPage.visit()
    RegistrationPage.enterValidIco()
    cy.wait(1000)
    RegistrationPage.clickVerifyButton()
    RegistrationPage.enterEmail()
    RegistrationPage.enterFirstName()
    RegistrationPage.enterLastName()
    RegistrationPage.clickOutsideOfTheForm()
    cy.wait(500)
    RegistrationPage.submit()
    RegistrationPage.checkUrlAndMessageAfterSuccessReg()
    RegistrationPage.backToHomeAndVerifyUrl()
  })
})


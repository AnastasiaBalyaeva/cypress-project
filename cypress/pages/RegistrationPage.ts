import { faker } from '@faker-js/faker'

export default new class RegistrationPage {
  visit() {
    cy.get('button[data-testid="home-registration-button"]').should('be.visible').click({ force: true })
  }

  checkLogoIsVisible() {
    cy.get('img[data-testid="image-logo"]').should('be.visible') 
  }

  checkLoginButton() {
    cy.get('button[data-testid="home-login-button"]').should('be.visible')
  }

  checkRegistrationButton() {
    cy.get('button[data-testid="home-registration-button"]').should('be.visible')
  }
  
  clickIcoInput() {
    cy.contains('label', 'IČO').should('be.visible').click({ force: true })

  }
  checkIcoRequiredError() {
    cy.contains('Pole IČO je povinné').should('be.visible')
  }

  inputIncorrectIco() {
    cy.get('input[data-testid="registration-ico-input"]').type('12345678')
  }

  clickVerifyButton() {
    cy.contains('button','Zkontrolovat').click({ force: true })
  }

  validateIcoNotFoundError() {
    cy.contains('IČO nenalezeno').should('be.visible')
  }

  clickOutsideOfTheForm() {
    cy.get('div[class="mud-paper mud-elevation-25 pa-8"]').click({ force: true })
  }

  enterValidIco() {
    cy.get('input[data-testid="registration-ico-input"]').type('63995433')
    cy.get('div[class="mud-paper mud-elevation-25 pa-8"]').click({ force: true })
  }

  enterFirstName() {
    cy.get('input[data-testid="registration-firstname-input"]').type(faker.person.firstName());
  }

  enterLastName() {
    cy.get('input[data-testid="registration-lastname-input"]').type(faker.person.lastName());
  }

  enterEmail() {
    cy.get('input[data-testid="registration-email-input"]').type(faker.internet.email());
  }

  submit() {
    cy.get('button[data-testid="registration-button"]').click()
  }

  checkUrlAndMessageAfterSuccessReg() {
    cy.url().should('eq', 'https://localhost:8080/register/completed/created')
    cy.contains('Pro dokončení registrace je nutné nastavit heslo přes odkaz odeslaný na Váš email.').should('be.visible')
  }
  
  backToHomeAndVerifyUrl() {
    cy.get('button[data-testid="back-home-button"]').click()
    cy.wait(500)
    cy.url().should('eq','https://localhost:8080/')
  }

  validateInput(name: string, email: string, role: string, address: string) {
    cy.get('input[data-testid="registration-firstname-input"]').should('have.value', name);
    cy.get('input[data-testid="registration-lastname-input"]').should('have.value', email);
    cy.get('input[data-testid="registration-email-input"]').should('have.value', role);
  }
}

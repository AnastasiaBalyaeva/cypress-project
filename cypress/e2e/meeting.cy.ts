/// <reference types="cypress" />

import { defineConfig } from 'cypress';
import meetingData from '../fixtures/meeting.json'
import MeetingPage from 'cypress/pages/MeetingPage'
import type { Meeting } from 'cypress/pages/MeetingPage'
import LoginPage from 'cypress/pages/LoginPage'

describe('login', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'))
    cy.wait(2000)
    LoginPage.clickHomeLoginButton()
    cy.successlogin()
  })

  it('Create meeting', () => {
    const schuze: Meeting = {
      subject: meetingData.subject,
      place: meetingData.place,
      note: meetingData.note,
      document: meetingData.document
    }
    MeetingPage.createMeeting(schuze)
  })
})

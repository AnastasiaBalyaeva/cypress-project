/// <reference types="cypress" />

export interface Meeting {
  subject: string
  place: string
  note: string
  document: string
}

export default new class MeetingPage {
  getToCreatingMeeting() {
    cy.wait(2000)
    cy.get('button[id="grid-row-detail"]').click()
    cy.get('div[id="org-unit-meeting-list"] a').click({ force: true })
    cy.get('button[id="grid-create"]').click()
  }

  enterSubject(subject: string) {
    cy.get('input[id="meeting-subject"]').type(subject)
  }

  enterPlace(place: string) {
    cy.get('input[id="meeting-location"]').type(place)
  }

  enterNote(note: string) {
    cy.get('input[id="meeting-location-note"]').type(note)
  }

  uploadDocument(document: string) {
    cy.get('input[class="absolute mud-width-full mud-height-full overflow-hidden z-20"]')
      .selectFile(`cypress/fixtures/${document}`, { force: true })
  }

  clickSubmitButton() {
    cy.get('button[id="modal-create"]').click()
  }

  clickConfirmationButton() {
    cy.get('button[data-testid="paid-action-confirm"]').click({ force: true })
  }

  createMeeting(meeting: Meeting) {
    this.getToCreatingMeeting()
    this.enterSubject(meeting.subject)
    this.enterPlace(meeting.place)
    this.enterNote(meeting.note)
    this.uploadDocument(meeting.document)
    this.clickSubmitButton()
    this.clickConfirmationButton()
  }
}




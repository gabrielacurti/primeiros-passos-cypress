import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    wrongCredentialAlert: "[role='alert']",
     dashboardGrid: ".orangehrm-dashboard-grid",
     myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
     firstNameField: "[name='firstName']",
     lastNameField: "[name='lastName']",
     genericField: ".oxd-input--active",
     dataField: "[placeholder='yyyy-dd-mm']",
     saveButton: ".oxd-button--secondary"
  }


  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).should('be.visible').click()
    cy.get(selectorsList.firstNameField).clear().type('Gabriela')
    cy.get(selectorsList.lastNameField).clear().type('Masse')
    cy.get(selectorsList.genericField).eq(3).clear().type('EmployeeID')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIDTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('Driver\'s LicenceNumberTest')
    cy.get(selectorsList.genericField).eq(6).clear({force: true}).type('2025-03-10', {force: true})
    cy.contains('Close').click()
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get('.oxd-select-dropdown > :nth-child(3)')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get('.oxd-select-dropdown > :nth-child(3)').click()
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click(), {force: true}
    cy.get(selectorsList.saveButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Update')
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})

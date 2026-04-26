class MyInfoPage {

    selectorsList() {
      const Selectors = {

            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dataField: "[placeholder='yyyy-dd-mm']",
            saveButton: ".oxd-button--secondary"

      }

      return Selectors

    }

    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }
    
    fillEmpolyeeDetails(employeeID, otherID, driversLicenceNumber, expyreDate) {

         cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeID)
         cy.get(this.selectorsList().genericField).eq(4).clear().type(otherID)
         cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenceNumber)
         cy.get(this.selectorsList().genericField).eq(6).clear().type(expyreDate)
         cy.contains('Close').click()
    
        }


}


export default MyInfoPage
class SignUpPage {

    getMrGender = () => cy.get('#id_gender1');
    getName = () => cy.get('#name');
    getPassword = () => cy.get('#password');
    getDayOfBirth = () => cy.get('#days');
    getMonthBirth = () => cy.get('#months');
    getYearsBirth = () => cy.get('#years');
    getNewLetter = () => cy.get('#newsletter');
}
class LoginPage {
    getSignUpName = () => cy.get('.signup-form input[name="name"]');
    getSignUpEmail = () => cy.get('.signup-form input[name="email"]');
    getSignUpButton = () => cy.get('.signup-form button');

    typeEnterName(name) {
        this.getSignUpName().type(name);
        return this;
    }

    typeEmail(email) {
        this.getSignUpEmail().type(email);
        return this;
    }

    clickSignUpButton() {
        this.getSignUpButton().click();
        return this;
    }
}


export default LoginPage;
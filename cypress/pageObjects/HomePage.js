class HomePage {

    getPageLogo = () => cy.get('.logo.pull-left img');
    getSignUpLink = () => cy.get('a[href="/login"]');

    clickSingUpLink() {
        this.getSignUpLink().click();
        return this;
    }
  }
  
  export default HomePage;
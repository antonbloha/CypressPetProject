import HomePage from "../pageObjects/HomePage";
import LoginPage from "../pageObjects/LoginSignUpPage";

const homePage = new HomePage();
const loginPage =  new LoginPage();

let userData;


describe('creating user', function () {

    before(() => {
        cy.fixture('userData').then((data) => {
            userData = data; // Assign the data to the global variable
        });
    });


    it('TC_001.01 | Registring new User', () => {
        homePage.clickSingUpLink();
        loginPage.typeEnterName(userData.name)
                 .typeEmail(userData.email)
                 .clickSignUpButton();
    })
})


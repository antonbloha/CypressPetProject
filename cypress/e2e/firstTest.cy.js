/// <reference types="cypress" />


describe('First', ()=> {
    
    it.only('AE_TestCase_1', () =>{
        
        cy.get('.logo.pull-left img').should('be.visible')
        cy.contains('a', 'Signup / Login').click()
        cy.get('.signup-form').should('be.visible')
        cy.get('.signup-form input[name="name"]').type('Stepan')
        cy.get('.signup-form input[name="email"]').type(`email_${Date.now()}@gmail.com`)
        cy.get('.signup-form button').click()
        cy.get('.login-form > h2').should('contain', 'Enter Account Information')
        cy.get('#id_gender1').click()
        cy.get('#name').type(' Ivanov')
        cy.get('#password').type('password')
        cy.get('#days').select('4')
        cy.get('#months').select('April')
        cy.get('#years').select('2000')
        cy.get('#newsletter').click()
        cy.get('#optin').click()
        cy.get('#first_name').type('Stepan')
        cy.get('#last_name').type('Ivanov')
        cy.get('#company').type('Good Company')
        cy.get('#address1').type('123 First Street')
        cy.get('#country').select('United States')
        cy.get('#state').type('California')
        cy.get('#city').type('California City')
        cy.get('#zipcode').type('85949')
        cy.get('#mobile_number').type('(408) 123-2345')
        cy.get('button[data-qa="create-account"]').click()
        cy.get('.title > b').should('contain', 'Account Created!')
        cy.get('a[data-qa="continue-button"]').click()
        cy.get('.navbar-nav li:last-child a').should('contain', ' Logged in as Stepan Ivanov')
        cy.get('a[href="/delete_account"]').click()
        cy.get('h2.title').should('have.text','Account Deleted!')
    })

    it('AE_TestCase_15', () => {
        cy.visit('https://www.automationexercise.com/')
        cy.get('.logo.pull-left img').should('be.visible')
        cy.contains('a', 'Signup / Login').click()
        cy.get('.signup-form').should('be.visible')
        cy.get('.signup-form input[name="name"]').type('Stepan')
        cy.get('.signup-form input[name="email"]').type(`email_${Date.now()}@gmail.com`)
        cy.get('.signup-form button').click()
        cy.get('.login-form > h2').should('contain', 'Enter Account Information')
        cy.get('#id_gender1').click()
        cy.get('#name').type(' Ivanov')
        cy.get('#password').type('password')
        cy.get('#days').select('4')
        cy.get('#months').select('April')
        cy.get('#years').select('2000')
        cy.get('#newsletter').click()
        cy.get('#optin').click()
        cy.get('#first_name').type('Stepan')
        cy.get('#last_name').type('Ivanov')
        cy.get('#company').type('Good Company')
        cy.get('#address1').type('123 First Street')
        cy.get('#country').select('United States')
        cy.get('#state').type('California')
        cy.get('#city').type('California City')
        cy.get('#zipcode').type('85949')
        cy.get('#mobile_number').type('(408) 123-2345')
        cy.get('button[data-qa="create-account"]').click()
        cy.get('.title > b').should('contain', 'Account Created!')
        cy.get('a[data-qa="continue-button"]').click()
        
        cy.get('.navbar-nav li:last-child a').should('contain', ' Logged in as Stepan Ivanov')
        cy.get('.features_items .productinfo a[data-product-id="1"]').click()
        cy.get('.close-modal').click()
        cy.get('.nav a[href = "/view_cart"]').click()
       
        cy.get('.check_out').should('contain', 'Proceed To Checkout').click()
        cy.get('.form-control').type('Commenting here')
        cy.get('a[href="/payment"]').click()
        cy.get('[name = "name_on_card"]').type('Stepan Ivanov')
        cy.get('[name = "card_number"]').type('4561654832518888')
        cy.get('[name = "cvc"]').type('456')
        cy.get('[name = "expiry_month"]').type('12')
        cy.get('[name = "expiry_year"]').type('2024')
        cy.get('#submit').click()
        cy.get('p[style = "font-size: 20px; font-family: garamond;"]').should('contain', 'Congratulations! Your order has been confirmed!')
        cy.get('a[href="/delete_account"]').click()
        cy.get('h2.title').should('have.text','Account Deleted!') 
    })
    
})
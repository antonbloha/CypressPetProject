// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

beforeEach(() => {
    const testFileName = Cypress.spec.name; // Get the current test file name
  
    // Derive the URL based on the test file name
    const relativeUrl = `/${testFileName.replace('.cy.js', '')}`;
  
    // Automatically visit the derived URL
    cy.visit(relativeUrl);
  });

// Alternatively you can use CommonJS syntax:
// require('./commands')
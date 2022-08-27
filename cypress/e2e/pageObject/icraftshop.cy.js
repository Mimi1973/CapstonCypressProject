/// <reference types = "cypress"/>
import Register from "../pageObject/Registration/Register"
import Cart from "../pageObject/Cart/Cart"
import Login from "../pageObject/Login/Logins"
import Product from "../pageObject/Product/Product"


let dt 

describe('icraftshop', () => {

  before (()=>{
    cy.fixture('icraftshopdata').then(function(data){

      dt = data
      
    })

  } )
    it('passes', () => {
  
      cy.visit('http://shop.icraftsoft.net:8095/')
      //cy.visit('https://example.cypress.io')

      const R = new Register()
      R.registerButton().eq(1)
        .should('have.attr', 'value', 'Register')
        .and('have.attr', 'type', 'submit')
        .click()
      cy.wait(2000)
      R.usernames()
        .type(dt.name)
        .should('have.value', dt.name)
      R.emails()
        .type(dt.email)
        .should('have.value', dt.email)

      //R.registerButton().eq(1).click()
     // R.usernames().type(dt.name)
     // R.emails().type(dt.email)
     cy.wait(2000)
     R.submitButton().eq(0).click()
    

      })
      it('Login', ()=>{
      cy.visit('http://shop.icraftsoft.net:8095/')

    const L = new Login()
    var P = new Product()
    const C = new Cart()

    L.login()
      .should('have.attr', 'name', 'userid')
      .and('have.attr', 'type', 'number')
    cy.wait(6000)

      L.login().type(dt.loginID)
     L.loginButton().eq(0).click()

     cy.wait(2000)
  // cy.get('#myTable_filter > label > .form-control').type('DELL')
      cy.get("input[type='search']").type('Lenovo PC')
   // cy.wait(2000)
  
    cy.selectProduct(dt.productName[0])
   // cy.selectProduct("Lenovo PC")

    for (let index = 0; index < dt.productName.length; index ++){
      cy.selectProduct(dt.productName[index])

    }

     C.Cart();
     
      
    })
      })
    
    

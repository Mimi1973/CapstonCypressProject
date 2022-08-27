class Cart{

    //class Cart{
    //     cy.wait(2000)
    //     cy.get(':nth-child(1) > :nth-child(1) > .thumbnail > .btn-ground > form > [type="submit"]').click

    //    // cy.wait(2000)
    //    // cy.get(':nth-child(1) > :nth-child(1) > .thumbnail > .btn-ground > form > [type="submit"]').click

    //     cy.wait(2000)
    //     cy.get(':nth-child(1) > :nth-child(3) > .thumbnail > .btn-ground > form > [type="submit"]').click

    // }
Cart(){
    cy.wait(2000)
    cy.get('.navbar-nav > :nth-child(1) > .nav-link').click();

    cy.wait(2000)
    cy.get('#btn2').click();
    //cy.get('.btnSubmit').click()
    //cy.wait(2000) 

  //  cy.pause()
   cy.get('.btnSubmit').click();


}
}
export default Cart;

class Login {

    login(){

       // return cy.get("input[type='number']")
        //return cy.get(".from-control")
        
            return cy.get("input[type='number']")
        }
        
    

    loginButton() {
      //  return cy.get('.login-form-1 > form > [style="padding-left: 185px;"] > .btnSubmit');
        return  cy.get("input[type='submit']")

    }
}

export default Login;
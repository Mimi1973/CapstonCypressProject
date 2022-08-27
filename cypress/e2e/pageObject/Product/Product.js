class Product{
    products(){
        return cy.get(":nth-child(1) > :nth-child(1) > .thumbnail > .caption > :nth-child(2)")

    }

    productSubmitButton(){
        return cy.get(':nth-child(1) > :nth-child(2) > .thumbnail > .btn-ground > form > [type="submit"]')
    }

}
export default Product;
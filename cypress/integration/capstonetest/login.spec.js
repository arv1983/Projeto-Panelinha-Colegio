context('Login page', ()=>{

it("Login in with valid credentials", ()=>{
   
cy.viewport(screen.width,screen.height)
cy.visit("http://localhost:3000/");
cy.contains("Login");
cy.contains("Register");
cy.contains("Recrutamento");
cy.get(".sc-bdvvaa").contains("Login")
cy.get(":nth-child(1) > .sc-gsDJrp").type("renaneclaudia1@gmail.com");
cy.get(":nth-child(2) > .sc-gsDJrp").type("123456");
cy.get(".sc-bdvvaa").click();
})








})
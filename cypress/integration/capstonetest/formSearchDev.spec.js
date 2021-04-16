context("Form Seach Dev", ()=>{


  it("if the user is logged in and too for must dev and exist, the user must can he found", 
  ()=>{
    cy.viewport(screen.width,screen.height);
    cy.visit("http://localhost:3000/");
    cy.get(":nth-child(1) > .sc-gsDJrp").type("capstone2@gmail.com");
    cy.get(":nth-child(2) > .sc-gsDJrp").type("123456");
    cy.get(".sc-bdvvaa").click();
    cy.get(":nth-child(1) > .sc-dkPtyc");
    
    



  })



})
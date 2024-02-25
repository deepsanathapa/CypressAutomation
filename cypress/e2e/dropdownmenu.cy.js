describe('Sequential selection from dropdown', () => {
    it('Should select options from dropdown randomly', () => {
      cy.visit('https://www.amazon.com')  
      cy.get('#searchDropdownBox').select('Books',{force:true});
      cy.wait(2000); 
      cy.get('#searchDropdownBox option:not(:selected)').then($options => {
        const optionTexts = $options.map((index, option) => Cypress.$(option).text().trim()).get();
        Cypress._.shuffle(optionTexts).forEach(optionText => {
            cy.get('#searchDropdownBox').select(optionText,{force:true});
            cy.wait(2000); 
        });
       });
    });
  });
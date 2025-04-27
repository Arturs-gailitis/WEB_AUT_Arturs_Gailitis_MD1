import { GridPage } from "../pageObjects/gridPage"

describe('demoqa', () => {
    context('Grid Page', () => {
        
        it('testing Grid Page', () => {

            //Open https://demoqa.com/selectable
            GridPage.visit();

            //Click “Grid”
            GridPage.clickGrid.click();
            
            //Click- “Two”, “Four”, “Six”, “Eight”
            GridPage.clickNumbers.contains('Two').click();
            GridPage.clickNumbers.contains('Four').click();
            GridPage.clickNumbers.contains('Six').click();
            GridPage.clickNumbers.contains('Eight').click();

            //Validate that “Two”, “Four”, “Six”, “Eight” are highlighted
            GridPage.verifyHighlighted.contains('Two').should('have.class', 'active');
            GridPage.verifyHighlighted.contains('Four').should('have.class', 'active');
            GridPage.verifyHighlighted.contains('Six').should('have.class', 'active');
            GridPage.verifyHighlighted.contains('Eight').should('have.class', 'active');

            //Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted
            GridPage.clickNumbers.contains('One').should('not.have.class', 'active');
            GridPage.clickNumbers.contains('Three').should('not.have.class', 'active');
            GridPage.clickNumbers.contains('Five').should('not.have.class', 'active');
            GridPage.clickNumbers.contains('Seven').should('not.have.class', 'active');
            GridPage.clickNumbers.contains('Nine').should('not.have.class', 'active');
        })
    })
})

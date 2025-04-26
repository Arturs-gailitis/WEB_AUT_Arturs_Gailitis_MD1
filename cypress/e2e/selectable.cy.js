import { GridPage } from "../pageObjects/gridPage"

describe('demoqa', () => {
    context('Grid Page', () => {
        
        it('testing Grid Page', () => {

            GridPage.visit();

            GridPage.clickGrid.click();
            
            GridPage.clickNumbers.contains('Two').click();
            GridPage.clickNumbers.contains('Four').click();
            GridPage.clickNumbers.contains('Six').click();
            GridPage.clickNumbers.contains('Eight').click();

        })
    })
})

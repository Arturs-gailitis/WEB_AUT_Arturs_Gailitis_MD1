import { BasePage } from "./basePage";

export class GridPage extends BasePage {
    static get url() {
        return 'selectable';
    }

    static get clickGrid() {
        return cy.get('a#demo-tab-grid');
    }

    static get clickNumbers() {
        return cy.get('li.list-group-item');
    }
}

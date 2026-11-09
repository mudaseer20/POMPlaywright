import {Page} from '@playwright/test';
import { BasePage } from './BasePage';
import alllocators from '../locators/locators.json';



export class Homepage extends BasePage {
    private locators = alllocators.homePage;
    constructor(page: Page) {
        super(page);
    }

   async navigateToHomepage() {
await this.page.goto('/');

}
private newCarsMenu=() =>this.page.locator('//*[contains(text(),"NEW CARS")]');
private findnewCarsMenu=() => this.page.locator('text=Find New Cars');
private searchCar=()=>this.page.getByPlaceholder('Search');

async findNewCarsMenu() {
    await this.hover(this.locators.newCarsMenu);
    await this.clickByText(this.locators.findNewCarsMenu);
}
async searchForCar(carName: string) {
    await this.fill(this.locators.carName,carName)
await this.page.keyboard.press('Enter');

}



}
import {Page} from '@playwright/test';
import { BasePage } from './BasePage.js';

import alllocators from '../locators/locators.json' with { type: 'json' };


export class NewCarsPage extends BasePage {
    locators = alllocators.NewCarSearchPage;
    constructor(page: Page) {
        super(page);
    }
    async getTextValue() {
       return await this.getText(this.locators.newCars);
    }
    async clickviewmore(){
        await this.click(this.locators.viewmore);
    }
    async gettextbrands(){
        await this.getallTextcontent(this.locators.brands);
    }
    async clickcars(brand: string){
        await this.clickByText(brand);
    }
    async clickcartext(brand: string){
        const getBrandSelector = (brandName: string): string => {
  return this.locators.brandTemplate.replace('{text}', brandName);
};
        const brandLocator = this.page.locator(getBrandSelector(brand));
        await brandLocator.click();
    }
}
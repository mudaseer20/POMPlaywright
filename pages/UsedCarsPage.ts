import {Page} from '@playwright/test';
import { BasePage } from './BasePage.js';

import alllocators from '../locators/locators.json' with { type: 'json' };

export class UsedCarsPage extends BasePage {
        locators = alllocators.UsedCarSearchPage;
        constructor(page: Page) {
            super(page);
        }


          async clickcartext(brand: string){
        const getBrandSelector = (brandName: string): string => {
  return this.locators.UsedCars.replace('{text}', brandName);
};
        const brandLocator = this.page.locator(getBrandSelector(brand));
        await brandLocator.click();
    }
            async usedCarsMenu() {
    await this.hover(this.locators.usedCars);
    await this.clickByText(this.locators.findUsedCarsMenu);


}
         async getTextCars() {
    await this.hover(this.locators.usedCars);
    await this.clickByText(this.locators.findUsedCarsMenu);
    

}
    async gettextbrands(){
        await this.getallTextcontent(this.locators.brands);
    }
    }
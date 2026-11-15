import {Page} from '@playwright/test';
import { BasePage } from './BasePage.js';

import alllocators from '../locators/locators.json' with { type: 'json' };
import { ExpectPage } from './ExpectPage.js';


export class CarBasePage extends BasePage {
    readonly expectpage:ExpectPage
    locators = alllocators.NewCarSearchPage;
    constructor(page: Page) {
        super(page);
        this.expectpage=new ExpectPage(page)
    }
    async validatetext(text:string,locator:string)
{
await this.expectpage.assertLocatorHasText(this.page.locator(locator), text)
}


}
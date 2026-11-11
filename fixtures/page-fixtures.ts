import { test, expect } from '@playwright/test';
import { NewCarsPage } from '../pages/NewCarsPage.js';
import { Homepage } from '../pages/Homepage.js';
import { UsedCarsPage } from '../pages/UsedCarsPage.js';
import { Page } from 'playwright';

export class PageFixtures {

    readonly homepage: Homepage;
    readonly newCarsPage: NewCarsPage;
    readonly usedCarsPage: UsedCarsPage;  
    readonly page:Page;  
    constructor(page: Page) {
        this.page=page
        this.homepage = new Homepage(page);
        this.newCarsPage = new NewCarsPage(page);
        this.usedCarsPage = new UsedCarsPage(page);
    }

    get Basepage():Page{

        return this.page
    }
}
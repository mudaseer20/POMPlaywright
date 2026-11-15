import { Page } from '@playwright/test';
import { BasePage } from './BasePage.js';
import { ExpectPage } from './ExpectPage.js';
import alllocators from '../locators/locators.json' with { type: 'json' };

export class Homepage extends BasePage {
  readonly expectpage: ExpectPage;
  private locators = alllocators.homePage;

  constructor(page: Page) {
    super(page);
    this.expectpage = new ExpectPage(page);
  }

  async navigateToHomepage(): Promise<void> {
    await this.page.goto('/');
  }
async clickcarByfilter(text:string){
  await this.clickByFilterText(this.locators.carValue,text)
}
  async findNewCarsMenu(): Promise<void> {
    await this.hover(this.locators.newCarsMenu);
    await this.clickByText(this.locators.findNewCarsMenu);
  }

  async searchForCar(carName: string): Promise<void> {
    await this.fill(this.locators.carName, carName);
    await this.page.keyboard.press('Enter');
  }
  async clickcar(text:string){
   const getBrandSelector = (brandName: string): string => {
  return this.locators.cars.replace('{text}', brandName);
};
     const brandLocator = this.page.locator(getBrandSelector(text));
        await brandLocator.click();
    
  }
  

  async validatetext(text: string): Promise<void> {
    // Ensure 'findCar' exists in locators.json under 'homePage'
    const findCarLocator = this.page.locator(this.locators.findCar);
    await this.expectpage.assertLocatorHasText(findCarLocator, text);
  }
   async validateTitle(url:string){
        await this.expectpage.validatetitle(url);
   }

}
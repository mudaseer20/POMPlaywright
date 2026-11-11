import { test, expect } from '../utils/test-base.js'


test.describe('Find New Cars', () => {


  test.beforeEach(async ({ pages }) => {
  
    await pages.homepage.navigateToHomepage()
  });

  test('Find New Cars', async ({ pages}) => {
    await pages.homepage.findNewCarsMenu();
   await expect(pages.page).toHaveURL(/.*new-cars/);
    await pages.homepage.searchForCar('Toyota');
  });

  test('navigate to search new cars', async ({pages}) => {
    await pages.homepage.findNewCarsMenu();
    await pages.newCarsPage.getTextValue();
    await pages.newCarsPage.clickviewmore();
    await pages.newCarsPage.gettextbrands();
    await pages.newCarsPage.clickcartext('MG');
    console.log(await pages.newCarsPage.getTextValue());
  });

  test('navigate to used cars', async ({pages}) => {
    
    await pages.usedCarsPage.usedCarsMenu();
       await expect(pages.page).toHaveURL(/.*used/);
    await pages.newCarsPage.getTextValue();
    console.log(await pages.newCarsPage.getTextValue());
    expect(await pages.newCarsPage.getTextValue()).toBe('Find Second Hand Cars');
    await pages.newCarsPage.clickviewmore();
    await pages.usedCarsPage.gettextbrands();

  });
});

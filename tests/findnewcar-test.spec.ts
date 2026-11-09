import {test, expect} from '@playwright/test';
import {NewCarsPage} from '../pages/NewCarsPage';
import {Homepage} from '../pages/Homepage';


test.describe('Find New Cars', () => {
    let homepage: Homepage;
    let newCarsPage: NewCarsPage;

    test.beforeEach(async ({page}) => {
        homepage = new Homepage(page);
       newCarsPage = new NewCarsPage(page);
        await homepage.navigateToHomepage();
    });
test('Find New Cars', async ({page}) => {
    
    await homepage.findNewCarsMenu();
    await expect(page).toHaveURL(/.*new-cars/);
    await homepage.searchForCar('Toyota');
})
test('navigate to search new cars', async () => {
    
    await homepage.findNewCarsMenu();
    await newCarsPage.getTextValue();
    await newCarsPage.clickviewmore();
    await newCarsPage.gettextbrands();
    await newCarsPage. clickcartext('MG');
      await newCarsPage.getTextValue();


})
})
import { test, expect } from '../utils/test-base.js'


test.describe('Find New Cars', () => {
  test.beforeEach(async ({ pages }) => {
    await pages.homepage.navigateToHomepage()
  });

  test.describe('validate 2 cases', () => {
    test('click new cars', async ({ pages }) => {
      await pages.homepage.validateTitle("New Cars, Used Cars, On Road Price, Buy Car, Sell Your Car - CarWale")
      await pages.homepage.validatetext("Find Your Right Car");
      await pages.homepage.clickcar('Maruti Brezza')


    })
    test('validate url', async ({ pages,browserName }) => {
        test.skip(browserName === 'firefox', 'Still working on Firefox support');
      await pages.homepage.findNewCarsMenu();
      await expect(pages.page).toHaveURL(/.*new-cars/);
      await pages.homepage.searchForCar('Toyota');

    })



  });



})

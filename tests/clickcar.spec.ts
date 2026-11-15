import { test, expect } from '../utils/test-base.js'


test.describe('Find New Cars', () => {
  test.beforeEach(async ({ pages }) => {
    await pages.homepage.navigateToHomepage()
  });

  test('click new cars', async ({ pages }) => {
    await pages.homepage.validateTitle("New Cars, Used Cars, On Road Price, Buy Car, Sell Your Car - CarWale")
    await pages.homepage.validatetext("Find Your Right Car");
    await pages.homepage.clickcar('Maruti Brezza')
    await expect(pages.page).toHaveURL(/.*brezza/);
    await pages.page.goBack()
    await pages.homepage.clickcar('Jeep Compass')
    await expect(pages.page).toHaveURL(/.*compass/);
    await pages.page.goBack()
    await pages.homepage.clickcarByfilter('Maruti Brezza')
    await expect(pages.page).toHaveURL(/.*brezza/);
    await pages.page.goBack()



  })
})
import { test} from '../utils/test-base.js'
 import { readCSVData } from '../utils/readcsv.js';

 test.describe('Find New Cars', () => {


  test.beforeEach(async ({ pages }) => {
  
    await pages.homepage.navigateToHomepage()
  });


const testdata=readCSVData('data/testdata.csv')
  test('navigate to new cars', async ({pages}) => {
for (const data of testdata){
  console.log(data)

    await pages.homepage.findNewCarsMenu();
    await pages.newCarsPage.getTextValue();
    await pages.newCarsPage.clickviewmore();
    await pages.newCarsPage.gettextbrands();
    console.log(data.carBrand)
    if(data.carBrand==='MG'){
    await pages.newCarsPage.clickcartext('MG');
    console.log(await pages.newCarsPage.getTextValue());
    await pages.page.goBack()
}


else if(data.carBrand==='BMW'){
      await pages.newCarsPage.clickcartext('BMW');
    console.log(await pages.newCarsPage.getTextValue());
    await pages.page.goBack()


}
else if(data.carBrand==='Tata'){
      await pages.newCarsPage.clickcartext('Tata');
    console.log(await pages.newCarsPage.getTextValue());
    await pages.page.goBack()


}
}


  });

  });
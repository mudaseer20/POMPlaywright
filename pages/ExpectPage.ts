import {Page,expect,Locator} from '@playwright/test';
export class ExpectPage {
     page:Page;
    constructor(page:Page) {
        this.page = page;
    } 

async validateurl(url:string){
expect(this.page).toHaveURL(url)

}

async validatetitle(title:string){
  await expect(this.page).toHaveTitle(title)
}


async locatorenable(locator:Locator,timeout = 5000){
  await expect(locator).toBeEnabled({timeout})
}

async locatordisable(locator:Locator,timeout=5000){
 await expect(locator).toBeDisabled({timeout})
}


async tohaveCount(locator: Locator, count:number,timeout?:number){
   await expect(locator).toHaveCount(count,{timeout});
}


async tohaveValue(locator: Locator, value:string){
   await expect(locator).toHaveValue(value);
}


 async assertLocatorHasText(locator: Locator, expectedText: string | RegExp | Array<string | RegExp>, options?: { timeout?: number }) {
  await expect(locator).toHaveText(expectedText, options);
}
async assertvisible( expectedText: string,
    exact: boolean = false,
    timeout: number = 5000
  ): Promise<void> {
    const textLocator = this.page.getByText(expectedText, { exact });
    await expect(textLocator).toBeVisible({ timeout });
  }

  

}


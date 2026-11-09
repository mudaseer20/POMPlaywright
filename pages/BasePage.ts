import {Page} from '@playwright/test';
export class BasePage {
     page:Page;
    constructor(page:Page) {
        this.page = page;
    } 

    async navigateTo(url: string){
        await this.page.goto(url);
    }

    async waitforTimeout(timeout: number){
        await this.page.waitForTimeout(timeout);
    }
async click(locator: string){
    await this.page.locator(locator).click();   


}
async clickByText(text: string){
    await this.page.getByText(text).click();
}
async clickByPlaceholder(placeholder: string){
    await this.page.getByPlaceholder(placeholder).click();
}

async clickByLabel(label: string){
    await this.page.getByLabel(label).click();
}

async clickByRole(role: Parameters<Page['getByRole']>[0], name: string){
    await this.page.getByRole(role, {name:name}).click();
}
async fill(locator: string, value: string ){
    await this.page.locator(locator).fill(value);

}
async getallTextcontent(locator: string){
const itemsLocator = this.page.locator(locator);

// 2. Turn the locator into an array of individual locators
const items = await itemsLocator.all();  
   const textArray = [];

// 3. Loop through them and extract text individually
for (const item of items) {
  // .textContent() auto-waits for each item to be attached
  const text = await item.textContent();
  textArray.push(text);
}

console.log(textArray);
}   



async hover(locator: string){
    await this.page.locator(locator).hover();
}

async getText(locator: string){
    return await this.page.locator(locator).textContent();  
}




}
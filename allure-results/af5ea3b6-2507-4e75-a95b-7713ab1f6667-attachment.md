# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: findnewcar-test.spec.ts >> Find New Cars
- Location: tests\findnewcar-test.spec.ts:4:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.hover: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//*[contains(text(),"NEW CARS")]')

```

# Test source

```ts
  1  | import {Page} from '@playwright/test';
  2  | 
  3  | export class Homepage {
  4  |     private page: Page;
  5  | 
  6  |     constructor(page: Page) {
  7  |         this.page = page;
  8  |     }
  9  | 
  10 |    async navigateToHomepage() {
  11 | 
  12 | }
  13 | private newCarsMenu=() =>this.page.locator('//*[contains(text(),"NEW CARS")]');
  14 | private findnewCarsMenu=() => this.page.locator('text=Find New Cars');
  15 | private searchCar=()=>this.page.getByPlaceholder('Search');
  16 | 
  17 | async findNewCarsMenu() {
> 18 |     await this.newCarsMenu().hover();
     |                              ^ Error: locator.hover: Test timeout of 30000ms exceeded.
  19 |     await this.findnewCarsMenu().click();
  20 | }
  21 | async searchForCar(carName: string) {
  22 |     await this.searchCar().fill(carName);
  23 |     await this.searchCar().press('Enter');
  24 | 
  25 | }
  26 | 
  27 | 
  28 | }
```
import {test as BaseTest,Page,expect} from '@playwright/test';
import {PageFixtures} from '../fixtures/page-fixtures.js';

type Fixtures={
    pages:PageFixtures;


}

export const test=BaseTest.extend<Fixtures>({
    pages:async({page},use)=>{
        await use(new PageFixtures(page) )

    },
});

export{expect}

import { test, expect } from '@playwright/test';

test('GET /api/tags returns success', async ({ request }) => {
  const response = await request.get('https://conduit-api.bondaracademy.com/api/tags');
  console.log(response.status())
  expect(response.status()).toBe(200);

  expect(response.ok()).toBeTruthy();
  console.log(await response.json())
  let output=await response.json()
  expect(await response.json()).toBeTruthy();
  expect(output.tags[0]).toEqual("Test")
  expect(output.tags[0]).toBe("Test")
  expect(output.tags.length).toEqual(10)

});

test('validate pages',async({request})=>{
  const response = await request.get('https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0');
 
  expect(response.status()).toEqual(200)
  const responsejson=await response.json()
  console.log(responsejson)
  
  expect(responsejson.articles.length).toBeLessThanOrEqual(10)
  expect(responsejson.articlesCount).toEqual(10)

  
  

})
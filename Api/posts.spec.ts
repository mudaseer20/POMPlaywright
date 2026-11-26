import { test, expect } from '@playwright/test';

test('Post method and delete method', async ({ request }) => {
  const response = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
    data: { user: { email: "mudaseer30@gmail.com", password: "vaayoo123" } }
  });
  
  const responseJSON = await response.json();
  const token = responseJSON.user.token;

  const newArticle = await request.post('https://conduit-api.bondaracademy.com/api/articles', {
    data: { 
      article: {
        title: "teston",
        description: "test descript hhtestte",
        body: "test bodyone",
        tagList: ["one"] // Fixed: camelCase 'tagList'
      }
    },
    headers: {
      Authorization: `Token ${token}` // Fixed: Added space after 'Token'
    }
  });

  const newar = await newArticle.json();
  console.log(newar);
  console.log(newArticle.status()); // Fixed: Called .status() on the response object

  // Recommended assertions to validate the test passed
  expect(newArticle.status()).toBe(201);
  expect(newar.article.title).toBe("teston");
  const slugid=newar.article.slug

  const deleteresponse=await request.delete(`https://conduit-api.bondaracademy.com/api/articles/${slugid}`,   {headers: {
      Authorization: `Token ${token}` // Fixed: Added space after 'Token'
    }

})
console.log(deleteresponse.status())
expect(deleteresponse.status()).toEqual(204)

});


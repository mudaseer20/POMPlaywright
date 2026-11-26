import { test, expect } from '@playwright/test';
import { ApiClient } from './ApiClient.js';
import { LoginResponse, ArticleResponse } from './types.js';

const BASE_URL = process.env.API_BASE_URL || 'https://conduit-api.bondaracademy.com/api';
const USER_CREDENTIALS = {
  email: process.env.TEST_EMAIL || 'mudaseer30@gmail.com',
  password: process.env.TEST_PASSWORD || 'vaayoo123',
};

test('Create and delete an article', async ({ request }) => {
  const api = new ApiClient(request, BASE_URL);

  // 1. Authenticate and store token in the client
  const loginData = await api.post<LoginResponse>(
    '/users/login',
    { user: USER_CREDENTIALS },
    200
  );
  api.setToken(loginData.user.token);

  // 2. Create a new article with unique data
  const articlePayload = {
    title: `Test Article ${Date.now()}`,
    description: 'Automated test description',
    body: 'Automated test body content',
    tagList: ['automation', 'playwright'],
  };

  const created = await api.post<ArticleResponse>(
    '/articles',
    { article: articlePayload },
    201
  );

  expect(created.article.title).toBe(articlePayload.title);
  expect(created.article.tagList).toEqual(articlePayload.tagList);

  // 3. Delete the created article using its slug
  await api.delete(`/articles/${created.article.slug}`, 204);
});
